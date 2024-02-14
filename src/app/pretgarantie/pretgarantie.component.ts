import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {
  MatTableDataSource,
  MatTableModule
} from "@angular/material/table";
import {DataSource} from "@angular/cdk/collections";

export interface PretGarantie {
  price: number
  inEffectSince: Date
}

@Component({
  selector: 'app-pretgarantie',
  standalone: true,
  imports: [
    MatTableModule
  ],
  templateUrl: './pretgarantie.component.html',
  styleUrl: './pretgarantie.component.css'
})
export class PretgarantieComponent {
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  constructor(private httpClient: HttpClient) {
    httpClient.get<PretGarantie[]>('http://localhost:8080/garantie/pret/toate').subscribe({
      next: (response) => {
        this.dataSource.data = response;
      }
    })
  }

  displayedColumns: string[] = ['pret', 'since'];
}
