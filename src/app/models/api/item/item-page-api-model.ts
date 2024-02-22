import {ItemApiModel} from "./item-api-model";

export interface ItemPageApiModel {
  content: ItemApiModel[],
  totalElements: number,
  totalPages: number
}
