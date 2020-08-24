import {Role} from "./role";
import {UserAccount} from "../../../../authentication/model/user-account";

export class RoleUser extends Role {

    public userAccount!: UserAccount;
    public listFriends: Array<RoleUser> = new Array<RoleUser>();
    public listFollowers: Array<RoleUser> = new Array<RoleUser>();
    public listPeopleIFollow: Array<RoleUser> = new Array<RoleUser>();
}
