import {StoreApiModel} from "../store/store-api-model";
import {UserApiModel} from "./user-api-model";

export interface UserPageApiModel {
  content: UserApiModel[],
  totalElements: number,
  totalPages: number
}
