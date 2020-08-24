import {Role} from './roles/role';

export class Partner {

  public uuid: string;
  public listRole: Array<Role> = new Array<Role>();

  constructor(uuid: string) {
    this.uuid = uuid;
  }
}
