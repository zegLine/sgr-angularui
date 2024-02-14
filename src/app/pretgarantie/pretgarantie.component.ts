import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {
  MatTableDataSource,
  MatTableModule
} from "@angular/material/table";
import {DataSource} from "@angular/cdk/collections";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";

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

  constructor(private httpClient: HttpClient) {
    this.queryApiForData();
  }

  queryApiForData() {
    this.httpClient.get<PretGarantie[]>('http://localhost:8080/garantie/pret/toate').subscribe({
      next: (response) => {
        this.dataSource.data = response;
      }
    })
  }

  deletePretGarantie(id: string) {
    console.log('deleting pg' + id);

    this.httpClient.delete('http://localhost:8080/garantie/pret/' + id + '/delete').subscribe(
      {next: (response) => {
        console.log(response);
          this.queryApiForData();
        }}
    );
  }

  displayedColumns: string[] = ['actions', 'pret', 'since'];
}
