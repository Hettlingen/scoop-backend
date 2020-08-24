import {Request, Response} from "express";
import {PartnerService} from "./services/partner-service";
import {RoleUser} from "./model/roles/role-user";

export class PartnerRoutes {
    public static routes(app: any): void {

        // Get all Friends
        app.route('/friends/:uuidRoleUser').get(async (request: Request, response: Response) => {
            PartnerService.getFriends(request.params.uuidRoleUser)
                .then(function(listRoleUser: Array<RoleUser>) {
                    response.status(200).send(listRoleUser);
                }).catch(function(error: any){
                response.status(404).send("Friends weren't found: " + error)
            });
        })

        // Create add Friend
        app.route('/friends').post(async (request: Request, response: Response) => {
            PartnerService.addFriend(request.body)
                .then(function (roleUser: RoleUser) {
                    response.status(200).send(roleUser);
                }).catch(function (error: any) {
                response.status(404).send("Friend wasn't added successful: " + error);
            });
        });

        // Remove a Friend
        app.route('/friends/:uuidUserAccount').delete(async (request: Request, response: Response) => {
            PartnerService.removeFriend(request.params.uuidUserAccount)
                .then(function (successful: boolean) {
                    response.status(200).send(successful);
                }).catch(function (error: any) {
                response.status(404).send("Friend wasn't removed successful: " + error);
            });
        });
    }
}
