import {Gallery} from "../model/gallery";
import {Image} from "../model/image";

export const mapGalleryFromDbToGallery = (galleryFromDb: any) => {
    const gallery = new Gallery();
    gallery.uuid = galleryFromDb[0].uuid;
    gallery.title = galleryFromDb[0].title;
    gallery.description = galleryFromDb[0].description;
    gallery.dateCreated = galleryFromDb[0].dateCreated;
    gallery.dateUpdated = galleryFromDb[0].dateUpdated;

    for (const row of galleryFromDb) {
        const image = new Image();
        image.uuid = row.uuidOfImage;
        image.title = row.titleOfImage;
        image.description = row.descriptionOfImage;
        image.fileUrl = row.fileUrlOfImage;
        image.bucketName = row.bucketNameOfImage;
        image.fileName = row.fileNameOfImage;
        image.dateCreated = row.dateCreatedOfImage;
        image.dateUpdated = row.dateUpdatedOfImage;
        gallery.listImages.push(image);
    }

    return gallery;
}

export const mapImageFromDbToImage = (imageFromDb: any) => {
    const image = new Image();
    image.uuid = imageFromDb.uuid;
    image.title = imageFromDb.title;
    image.description = imageFromDb.description;
    image.fileUrl = imageFromDb.fileUrl;
    image.bucketName = imageFromDb.bucketName;
    image.fileName = imageFromDb.fileName;
    image.dateCreated = imageFromDb.dateCreated;
    image.dateUpdated = imageFromDb.dateUpdated;
    return image;
}
