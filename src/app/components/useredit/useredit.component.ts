import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserApiModel} from "../../models/api/user/user-api-model";
import {UserService} from "../../services/api/user/user.service";
import {FloatLabelType, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormControl, FormsModule} from "@angular/forms";
import {MatCheckbox} from "@angular/material/checkbox";
import {SgrroleApiModel} from "../../models/api/user/sgrrole-api-model";

export interface SGRRoleSelection {
  role: SgrroleApiModel,
  selected: boolean
}

@Component({
  selector: 'app-useredit',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInput,
    MatCheckbox,
    FormsModule
  ],
  templateUrl: './useredit.component.html',
  styleUrl: './useredit.component.css'
})
export class UsereditComponent implements OnInit, OnDestroy {
  floatLabelControl: FloatLabelType = "always";
  private sub: any;
  protected userId: string = "";
  user!: UserApiModel;
  allRolesSelection!: SGRRoleSelection[];

  constructor(private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.userId = params['id'];

      this.userService.getUserDetails(this.userId).subscribe((data) => {
        this.user = data.body!;

        this.userService.getAllRoles().subscribe((data) => {
          let allRolesAvailable = data.body!;
          this.allRolesSelection = allRolesAvailable.map(role => {
            return {
              role: role,
              selected: this.user.sgrRoles.some(userRole => userRole.name === role.name)
            }
          })
        });
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
