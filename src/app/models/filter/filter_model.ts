import {SGRFiterType} from "./filter_type";

export interface SGRFilter {
  column_name: string,
  filter_type: SGRFiterType
}
