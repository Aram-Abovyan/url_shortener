import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [url, setUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    axios.post('/url/shorten', {url})
    .then(res => {
      setShortUrl(res.data.shortUrl)
      setUrl('')
    })
    .catch(e => {
      setError( e.response.data.error.message)
    })
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl)
    .then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000)
    })
    .catch(err => {
      console.error('Failed to copy text:', err)
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={e => setUrl(e.target.value)}
          placeholder="Enter a URL to shorten"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {error ? (<p style={{color: 'red'}}>{error}</p>) : null}
      {shortUrl ? (
          <>
            <br />
            <span>{shortUrl}</span>
            <button
              disabled={copied}
              onClick={handleCopy}
              type='button'
            >
              Copy URL
            </button>
          </>
        ) : null}
    </>
  )
}

export default App
