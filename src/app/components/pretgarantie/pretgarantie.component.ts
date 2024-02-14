import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {
  MatTableDataSource,
  MatTableModule
} from "@angular/material/table";
import {DataSource} from "@angular/cdk/collections";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {ConfirmPopupComponent} from "../confirm-popup/confirm-popup.component";
import {MatDialog} from "@angular/material/dialog";

export interface PretGarantie {
  id: string,
  price: number
  inEffectSince: Date
}

@Component({
  selector: 'app-pretgarantie',
  standalone: true,
  imports: [
    MatTableModule,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './pretgarantie.component.html',
  styleUrl: './pretgarantie.component.css'
})
export class PretgarantieComponent {
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  constructor(private httpClient: HttpClient, private dialog: MatDialog) {
    this.queryApiForData();
  }

  queryApiForData() {
    this.httpClient.get<PretGarantie[]>('http://localhost:8080/garantie/pret/toate').subscribe({
      next: (response) => {
        this.dataSource.data = response;
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
        this.httpClient.delete('http://localhost:8080/garantie/pret/' + id + '/delete').subscribe(
          {next: (response) => {
              console.log(response);
              this.queryApiForData();
            }}
        );
      }

    });
  }

  displayedColumns: string[] = ['actions', 'pret', 'since'];
}
