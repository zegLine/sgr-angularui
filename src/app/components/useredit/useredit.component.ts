import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-useredit',
  standalone: true,
  imports: [],
  templateUrl: './useredit.component.html',
  styleUrl: './useredit.component.css'
})
export class UsereditComponent implements OnInit, OnDestroy {
  private sub: any;
  protected userId: string = "";

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.userId = params['id'];
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
