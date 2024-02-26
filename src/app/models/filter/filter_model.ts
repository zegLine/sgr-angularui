import {SGRFiterType} from "./filter_type";

export interface SGRFilter {
  filter_name: string,
  column_name: string,
  filter_type: SGRFiterType
}
