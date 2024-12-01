-- CreateTable
CREATE TABLE "UrlMap" (
    "id" SERIAL NOT NULL,
    "hash" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "UrlMap_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UrlMap_hash_key" ON "UrlMap"("hash");

-- CreateIndex
CREATE UNIQUE INDEX "UrlMap_url_key" ON "UrlMap"("url");
