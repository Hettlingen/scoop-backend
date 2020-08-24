import {PartnerDatabseService} from "./database/partner-databse-service";
import {RoleUser} from "../model/roles/role-user";

export class PartnerService {

    // FRIENDS ---------------------------------------------
    static async getFriends(uuidUserAccount: string): Promise<Array<RoleUser>> {
        console.log('START: PartnerService.getFriends: ' + JSON.stringify(uuidUserAccount));

        try {
            return await PartnerDatabseService.readFriends(uuidUserAccount);
        } catch(error){
            throw new Error('[myfarmer] PartnerService.getFriends - Error reading friends of user: ' + uuidUserAccount);
        }
    }

    static async addFriend(uuidPerson: string): Promise<RoleUser> {
        console.log('START: PartnerService.addFriend: ' + uuidPerson);

        try {
            return await PartnerDatabseService.createFriend(uuidPerson);
        } catch(error){
            throw new Error('[myfarmer] PartnerService.addFriend - Error creating Post for Blog: '
                + uuidPerson + ', error: ' +
                + error);
        }
    }

    static async removeFriend(uuidPerson: string): Promise<boolean> {
        console.log('START: PartnerService.removeFriend: ' + uuidPerson);

        try {
            return await PartnerDatabseService.deleteFriend(uuidPerson);
        } catch(error){
            throw new Error('[myfarmer] PartnerService.removeFriend - Error deleting Post: '
                + uuidPerson + ', error: ' +
                + error);
        }
    }

    // FOLLOWERS ------------------------------------------
    static async getFollowers(uuidUserAccount: string): Promise<Array<RoleUser>> {
        console.log('START: PartnerService.getFriends: ' + JSON.stringify(uuidUserAccount));

        try {
            return await PartnerDatabseService.readFollowers(uuidUserAccount);
        } catch(error){
            throw new Error('[myfarmer] PartnerService.getFriends - Error reading friends of user: ' + uuidUserAccount);
        }
    }

    static async addFollower(uuidPerson: string): Promise<RoleUser> {
        console.log('START: PartnerService.addFriend: ' + uuidPerson);

        try {
            return await PartnerDatabseService.createFollower(uuidPerson);
        } catch(error){
            throw new Error('[myfarmer] PartnerService.addFriend - Error creating Post for Blog: '
                + uuidPerson + ', error: ' +
                + error);
        }
    }

    static async removeFollower(uuidPerson: string): Promise<boolean> {
        console.log('START: PartnerService.removeFriend: ' + uuidPerson);

        try {
            return await PartnerDatabseService.deleteFollower(uuidPerson);
        } catch(error){
            throw new Error('[myfarmer] PartnerService.removeFriend - Error deleting Post: '
                + uuidPerson + ', error: ' +
                + error);
        }
    }

    // PEOPLE WHICH I FOLLOW ------------------------------------
    static async getPeopleIFollow(uuidUserAccount: string): Promise<Array<RoleUser>> {
        console.log('START: PartnerService.getFriends: ' + JSON.stringify(uuidUserAccount));

        try {
            return await PartnerDatabseService.readPeopleIFollow(uuidUserAccount);
        } catch(error){
            throw new Error('[myfarmer] PartnerService.getFriends - Error reading friends of user: ' + uuidUserAccount);
        }
    }

    static async addPersonIFollow(uuidPerson: string): Promise<RoleUser> {
        console.log('START: PartnerService.addFriend: ' + uuidPerson);

        try {
            return await PartnerDatabseService.createPersonIFollow(uuidPerson);
        } catch(error){
            throw new Error('[myfarmer] PartnerService.addFriend - Error creating Post for Blog: '
                + uuidPerson + ', error: ' +
                + error);
        }
    }

    static async removePersonIFollow(uuidPerson: string): Promise<boolean> {
        console.log('START: PartnerService.removeFriend: ' + uuidPerson);

        try {
            return await PartnerDatabseService.deletePersonIFollow(uuidPerson);
        } catch(error){
            throw new Error('[myfarmer] PartnerService.removeFriend - Error deleting Post: '
                + uuidPerson + ', error: ' +
                + error);
        }
    }
}
