import {SgrprivilegeApiModel} from "./sgrprivilege-api-model";

export interface SgrroleApiModel {
  id: number,
  name: string,
  privileges: SgrprivilegeApiModel[]
}
