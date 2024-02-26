import {SgrroleApiModel} from "./sgrrole-api-model";

export interface UserApiModel {
  id: string,
  username: string,
  sgrRoles: SgrroleApiModel[]
}
