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
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {MatPaginator, MatPaginatorIntl, MatPaginatorModule} from "@angular/material/paginator";
import {startWith, switchMap} from "rxjs";
import {StoreService} from "../../services/api/store/store.service";
import {ConfirmPopupComponent} from "../confirm-popup/confirm-popup.component";
import {Dialog} from "@angular/cdk/dialog";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-store',
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
    MatRow,
    MatRowDef,
    MatTable,
    RouterLink,
    MatPaginatorModule,
    MatHeaderCellDef
  ],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent implements OnInit, AfterViewInit{
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  displayedColumns: string[] = ['actions', 'id', 'name', 'descriere'];
  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);

  constructor(protected storeService: StoreService, private router: Router, private route: ActivatedRoute, private dialog: MatDialog) {
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

  refreshDataSource() {
    this.route.queryParams.subscribe({next: (params) => {
        this.storeService.getAllStoreItems(params['pageSize'] || 5, params['pageIndex'] || 0).subscribe({
          next: (response) => {
            this.dataSource.data = response.body!.content;
            this.paginator.length = response.body!.totalElements;
          }
        });
      }});
  }

  clickDeleteStore(storeId: string) {
    const dialogRef = this.dialog.open(ConfirmPopupComponent, {
      data: {
        title: "Confirm deletion",
        message: "Are you sure you want to delete the store?",
      }
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.storeService.deleteStore(storeId).subscribe({next: ()=> {
            this.refreshDataSource();
          }});
      }

    });
  }
}
