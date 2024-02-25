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
  constructor(public dialogRef: MatDialogRef<FilterBoxComponent>, @Inject(MAT_DIALOG_DATA) public data: SGRFilter[]) {
    this.filters = data;
    this.initializeFiltersSelected();
  }

  onConfirm() {
    console.log(this.filtersSelected);
    this.dialogRef.close(true);
  }

  onDismiss() {
    this.dialogRef.close(false);
  }

  protected readonly SGRFiterType = SGRFiterType;

  initializeFiltersSelected() {
    this.filtersSelected = this.filters.map(filter => ({
      filter: filter,
      predicate: filter.filter_type === SGRFiterType.NUMERIC ? NumericFilterPredicates.GREATER_THAN : StringFilterPredicates.CONTAINS,
      value: ''
    }));
  }
}
