import {Component, OnDestroy, OnInit} from '@angular/core';
import {FloatLabelType, MatFormFieldModule} from "@angular/material/form-field";
import {UserApiModel} from "../../models/api/user/user-api-model";
import {SGRRoleSelection} from "../useredit/useredit.component";
import {SgrroleApiModel} from "../../models/api/user/sgrrole-api-model";
import {ActivatedRoute} from "@angular/router";
import {RoleService} from "../../services/api/user/role.service";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-roleedit',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInput
  ],
  templateUrl: './roleedit.component.html',
  styleUrl: './roleedit.component.css'
})
export class RoleeditComponent implements OnInit, OnDestroy {
  floatLabelControl: FloatLabelType = "always";
  private sub: any;
  protected roleId: string = "";
  role!: SgrroleApiModel;

  constructor(private route: ActivatedRoute, private roleService: RoleService) {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.roleId = params['id'];

      this.roleService.getRoleDetails(this.roleId).subscribe((data) => {
        this.role = data.body!;

      });
    });
  }

}
