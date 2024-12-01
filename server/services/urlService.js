const crypto = require('crypto')
const { getPrismaClient } = require('../dbClient')

const prisma = getPrismaClient()

const getShortUrl = async (url) => {
  const hash = crypto.createHash('md5').update(url).digest('hex')

  const urlRecord = await prisma.urlMap.upsert({
    where: {url},
    create: {hash, url},
    update: {}
  })

  return `${process.env.REDIRECT_BASE_URL}/${urlRecord.hash}`
}

const getUrl = async (hash) => {
  return await prisma.urlMap.findUnique({ where: {hash} })
}

module.exports = {
  getShortUrl,
  getUrl
}