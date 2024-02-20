import {StoreApiModel} from "./store-api-model";

export interface StorePageApiModel {
  content: StoreApiModel[],
  totalElements: number,
  totalPages: number
}
