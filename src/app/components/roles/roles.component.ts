import { Component } from '@angular/core';
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
import {MatPaginator} from "@angular/material/paginator";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {RoleService} from "../../services/api/user/role.service";
import {MatDialog} from "@angular/material/dialog";
import {NgForOf} from "@angular/common";
import {ConfirmPopupComponent} from "../confirm-popup/confirm-popup.component";

@Component({
  selector: 'app-roles',
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
    NgForOf
  ],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  displayedColumns: string[] = ['actions', 'id', 'name', 'privileges'];

  constructor(protected roleService: RoleService, private router: Router, private route: ActivatedRoute, private dialog: MatDialog) {}

  ngOnInit() {
    this.refreshDataSource();
  }

  refreshDataSource() {
    this.roleService.getAllRoles().subscribe((response) => {
      this.dataSource.data = response.body!;
    });
  }

  clickDeleteRole(id: number) {
    const dialogRef = this.dialog.open(ConfirmPopupComponent, {
      data: {title: 'Confirmare', message: 'Sunteti sigur ca doriti sa stergeti acest rol?'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.roleService.deleteRole(id).subscribe(() => {
          this.refreshDataSource();
        });
      }
    });
  }
}
