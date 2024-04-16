import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {FloatLabelType, MatFormFieldModule} from "@angular/material/form-field";
import {UserApiModel} from "../../models/api/user/user-api-model";
import {SGRRoleSelection} from "../useredit/useredit.component";
import {SgrroleApiModel} from "../../models/api/user/sgrrole-api-model";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {RoleService} from "../../services/api/user/role.service";
import {MatInput} from "@angular/material/input";
import {MatList, MatListItem} from "@angular/material/list";
import {MatLine} from "@angular/material/core";
import {NgForOf} from "@angular/common";
import {MatButton, MatIconButton} from "@angular/material/button";
import {SgrprivilegeApiModel} from "../../models/api/user/sgrprivilege-api-model";
import {MatIcon} from "@angular/material/icon";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";

@Component({
  selector: 'app-roleedit',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInput,
    MatList,
    MatListItem,
    MatLine,
    NgForOf,
    MatButton,
    MatIcon,
    MatIconButton,
    MatTable,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    RouterLink,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef
  ],
  templateUrl: './roleedit.component.html',
  styleUrl: './roleedit.component.css'
})
export class RoleeditComponent implements OnInit, OnDestroy {
  floatLabelControl: FloatLabelType = "always";
  private sub: any;
  protected roleId: string = "";
  role!: SgrroleApiModel;
  privilegesSelection!: SgrprivilegeApiModel[];
  displayedColumns: string[] = ['actions', 'id', 'name'];
  constructor(private route: ActivatedRoute, private roleService: RoleService, private changeDetectorRefs: ChangeDetectorRef) {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.roleId = params['id'];

      this.roleService.getRoleDetails(this.roleId).subscribe((data) => {
        this.role = data.body!;
        this.privilegesSelection = this.role.privileges;
        this.changeDetectorRefs.detectChanges();
      });
    });
  }

  saveChanges() {
  this.roleService.setRolePrivileges(this.roleId, this.privilegesSelection.map((privilege) => privilege.name)).subscribe((data) => {
      this.role = data.body!;
      this.privilegesSelection = this.role.privileges;
      this.changeDetectorRefs.detectChanges();
    });
  }

  clickDeletePrivilege(privilege: string) {
    this.roleService.deletePrivilegeFromRole(this.roleId, privilege).subscribe((data) => {
      this.role = data.body!;
      this.privilegesSelection = this.role.privileges;
      this.changeDetectorRefs.detectChanges();
    });
  }

  addNewPrivilege(name: string){
    let lastId: number;
    if (this.privilegesSelection.length == 0) {
      lastId = 0;
    } else {
      lastId = this.privilegesSelection.sort((a, b) => a.id - b.id)[this.privilegesSelection.length - 1].id;
    }
    this.privilegesSelection.push({id: lastId + 1, name: name});
    this.privilegesSelection = [...this.privilegesSelection]; //refresh the data source manually
  }
}
