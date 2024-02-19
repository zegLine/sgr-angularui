import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {
  MatTableDataSource,
  MatTableModule
} from "@angular/material/table";
import {DataSource} from "@angular/cdk/collections";
import {MatIcon} from "@angular/material/icon";
import {MatFabButton, MatIconButton} from "@angular/material/button";
import {ConfirmPopupComponent} from "../confirm-popup/confirm-popup.component";
import {MatDialog} from "@angular/material/dialog";
import {PretGarantie} from "../../models/api/pretgarantie/pretgarantie-api-model";
import {ApiService} from "../../services/api/api.service";
import {PretgarantieService} from "../../services/api/pretgarantie/pretgarantie.service";
import {RouterLink} from "@angular/router";



@Component({
  selector: 'app-pretgarantie',
  standalone: true,
  imports: [
    MatTableModule,
    MatIcon,
    MatIconButton,
    MatFabButton,
    RouterLink
  ],
  templateUrl: './pretgarantie.component.html',
  styleUrl: './pretgarantie.component.css'
})
export class PretgarantieComponent {
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  constructor(private httpClient: HttpClient, private dialog: MatDialog, private pretGarantieService: PretgarantieService) {
    this.queryApiForData();
  }

  queryApiForData() {
    this.pretGarantieService.getAllPretGarantieItems().subscribe({
      next: (response) => {
        this.dataSource.data = response.body!;
      }
    })
  }


  clickDeletePretGarantie(id: string) {
    const dialogRef = this.dialog.open(ConfirmPopupComponent, {
      data: {
        title: "Confirm deletion",
        message: "Are you sure you want to delete this?",
      }
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log(dialogResult);
      if (dialogResult) {
        this.pretGarantieService.deletePretGarantie(id).subscribe({next: ()=> {
            this.queryApiForData();
          }});
      }

    });
  }

  displayedColumns: string[] = ['actions', 'pret', 'since'];
}
