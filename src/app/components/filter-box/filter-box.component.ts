import {Component, Inject, Input} from '@angular/core';
import {SGRFilter} from "../../models/filter/filter_model";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {ConfirmDialogModel} from "../confirm-popup/confirm-popup.component";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SGRFiterType} from "../../models/filter/filter_type";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {StringFilterPredicates} from "../../models/filter/predicates/string_filter_predicates";
import {NumericFilterPredicates} from "../../models/filter/predicates/numeric_filter_predicates";
import {SGRFilterSelected} from "../../models/filter/filter_selected";

@Component({
  selector: 'app-filter-box',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    NgIf,
    MatFormFieldModule,
    MatSelect,
    MatOption,
    MatButton,
    MatInput,
    MatDialogContent,
    MatDialogActions,
    MatDialogTitle
  ],
  templateUrl: './filter-box.component.html',
  styleUrl: './filter-box.component.css'
})
export class FilterBoxComponent {
  filters!: SGRFilter[];
  filtersSelected: SGRFilterSelected[] = [];
  constructor(public dialogRef: MatDialogRef<FilterBoxComponent>, @Inject(MAT_DIALOG_DATA) public data: FilterBoxDialogData) {
    this.filters = data.filters;
    this.initializeFiltersSelected(data.filtersSelected);
  }

  onConfirm() {
    this.dialogRef.close(this.filtersSelected);
  }

  onDismiss() {
    this.dialogRef.close(false);
  }

  protected readonly SGRFiterType = SGRFiterType;

  initializeFiltersSelected(filtersSelectedAlready: SGRFilterSelected[]) {
    this.filtersSelected = this.filters.map((filter, index) => {
      const existingFilter = filtersSelectedAlready.find(selected => selected.filter.column_name === filter.column_name);
      if (existingFilter) {
        return existingFilter; // Use existing filter if found
      } else {
        // Create a new filter selection if not found
        return {
          filter: filter,
          predicate: filter.filter_type === SGRFiterType.NUMERIC ? NumericFilterPredicates.GREATER_THAN : StringFilterPredicates.CONTAINS,
          value: ''
        };
      }
    });
  }
}

export class FilterBoxDialogData {
  constructor(public filters: SGRFilter[], public filtersSelected: SGRFilterSelected[]) {
  }
}
