-- CreateTable
CREATE TABLE "Publish" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "publiHot" BOOLEAN NOT NULL DEFAULT false,
    "category" TEXT NOT NULL,
    "host" TEXT NOT NULL,
    "imgHost" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,

    CONSTRAINT "Publish_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetailPublish" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "publishId" TEXT NOT NULL,

    CONSTRAINT "DetailPublish_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImagesDetail" (
    "id" TEXT NOT NULL,
    "images" TEXT NOT NULL,
    "detailPublishId" TEXT NOT NULL,

    CONSTRAINT "ImagesDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "likes" INTEGER NOT NULL,
    "publishId" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DetailPublish" ADD CONSTRAINT "DetailPublish_publishId_fkey" FOREIGN KEY ("publishId") REFERENCES "Publish"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImagesDetail" ADD CONSTRAINT "ImagesDetail_detailPublishId_fkey" FOREIGN KEY ("detailPublishId") REFERENCES "DetailPublish"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_publishId_fkey" FOREIGN KEY ("publishId") REFERENCES "Publish"("id") ON DELETE CASCADE ON UPDATE CASCADE;
