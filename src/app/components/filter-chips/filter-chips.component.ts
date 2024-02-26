import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SGRFilterSelected} from "../../models/filter/filter_selected";
import {MatChip, MatChipOption} from "@angular/material/chips";
import {MatIcon} from "@angular/material/icon";
import {NgForOf} from "@angular/common";
import {MatFabButton, MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-filter-chips',
  standalone: true,
  imports: [
    MatChip,
    MatIcon,
    NgForOf,
    MatChipOption,
    MatFabButton,
    MatIconButton
  ],
  templateUrl: './filter-chips.component.html',
  styleUrl: './filter-chips.component.css'
})
export class FilterChipsComponent {
  @Input() filtersSelected!: SGRFilterSelected[];
  @Output() removeFilter = new EventEmitter<SGRFilterSelected>();
  protected readonly console = console;
}
