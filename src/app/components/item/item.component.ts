import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatFabButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatPaginator, MatPaginatorIntl} from "@angular/material/paginator";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {StoreService} from "../../services/api/store/store.service";
import {MatDialog} from "@angular/material/dialog";
import {ItemService} from "../../services/api/item/item.service";
import {ConfirmPopupComponent} from "../confirm-popup/confirm-popup.component";
import {MatSort, MatSortHeader, Sort} from "@angular/material/sort";

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatFabButton,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatIcon,
    MatIconButton,
    MatPaginator,
    MatRow,
    MatRowDef,
    MatTable,
    RouterLink,
    MatHeaderCellDef,
    MatSort,
    MatSortHeader
  ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  displayedColumns: string[] = ['actions', 'id', 'itemName', 'itemWeightKg'];
  sortingColumn: string = "";
  sortingDirection: string = "";
  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);

  constructor(protected itemService: ItemService, private router: Router, private route: ActivatedRoute, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.refreshDataSource();
  }

  ngAfterViewInit(): void {
    //this.dataSource.paginator = this.paginator;
    this.paginator.page.subscribe(() => {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { pageIndex: this.paginator.pageIndex, pageSize: this.paginator.pageSize },
      });
    });
  }

  sortChange(sortEvent: Sort) {
    console.log(sortEvent.active + ' ' + sortEvent.direction);
    this.sortingColumn = sortEvent.active;
    this.sortingDirection = sortEvent.direction;
    this.refreshDataSource();
  }

  refreshDataSource() {
    this.route.queryParams.subscribe({next: (params) => {
        const sortingColumn = this.sortingColumn ? this.sortingColumn : undefined;
        const sortingDirection = this.sortingDirection ? this.sortingDirection : undefined;
        this.itemService.getAllItems(params['pageSize'] || 5, params['pageIndex'] || 0, sortingColumn, sortingDirection).subscribe({
          next: (response) => {
            this.dataSource.data = response.body!.content;
            this.paginator.length = response.body!.totalElements;
          }
        });
      }});
  }

  clickDeleteItem(itemId: string) {
    const dialogRef = this.dialog.open(ConfirmPopupComponent, {
      data: {
        title: "Confirm deletion",
        message: "Are you sure you want to delete the item?",
      }
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.itemService.deleteItem(itemId).subscribe({next: ()=> {
            this.refreshDataSource();
          }});
      }

    });
  }
}
