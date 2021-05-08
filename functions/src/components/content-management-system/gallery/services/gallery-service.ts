import {Gallery} from "../model/gallery";
import {GalleryDatabseService} from "./database/gallery-databse-service";
import {FileService} from "../../../workplace/services/file-service";
import {Image} from "../model/image";
import {MyFile} from "../../../workplace/model/my-file";
import * as uuidGenerator from "uuid/v4";
import {FileHelper} from "../../../workplace/services/utils/file-helper";

export class GalleryService {

    static async getGallery(uuidGallery: string): Promise<Gallery> {
        console.log('START: GalleryService.getGallery: ' + uuidGallery);
        if (!uuidGallery) throw new Error('Gallery-ID is required');

        try {
            return await GalleryDatabseService.readGallery(uuidGallery);
        } catch(error){
            throw new Error('[myfarmer] GalleryService.getGallery - Error reading Gallery' + error);
        }
    }

    static async getImage(uuidImage: string): Promise<Image> {
        console.log('START: GalleryService.getImage: ' + uuidImage);
        if (!uuidImage) throw new Error('Image-ID is required');

        try {
            const image = await GalleryDatabseService.readImage(uuidImage);
            image.fileContentAsBase64 = await FileService.readImageAsBase64(image);
            return image;
        } catch (error) {
            throw new Error('[myfarmer] GalleryService.getImage - Error reading Image with uuid '
                + uuidImage + ', error: ' +
                + error);
        }

        throw new Error('[myfarmer] GalleryService.getImage - Error reading Image with uuid ' + uuidImage);
    }

    public static async saveImage(uuidGallery: string, myFile: MyFile): Promise<boolean> {
        try {
            myFile.uuid = uuidGenerator();
            myFile.uuidGallery = uuidGallery;
            myFile.fileName = FileHelper.createFileName(myFile);

            // save image to the google cloud storage
            await FileService.saveImage(myFile);
            return await GalleryDatabseService.saveImage(myFile);
        } catch (error) {
            // todo in case of an error we have to delete the image in the gcp-bucket
            throw new Error('[myfarmer] GalleryService.saveImage - Error save Image with uuid '
                + myFile.uuid + ', error: ' +
                + error);
        }
    }
}
