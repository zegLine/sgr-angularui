import {SGRFilter} from "./filter_model";
import {StringFilterPredicates} from "./predicates/string_filter_predicates";
import {NumericFilterPredicates} from "./predicates/numeric_filter_predicates";

export interface SGRFilterSelected {
  filter: SGRFilter,
  predicate: StringFilterPredicates | NumericFilterPredicates,
  value: string
}
