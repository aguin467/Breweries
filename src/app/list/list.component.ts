import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews: object;
  secbrews: object;

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpService) { }

  async ngOnInit() {
    this._http.getBeer().subscribe(data => {
      this.brews = data;
      console.log(this.brews);
    });
    this._http.getSecBeer().subscribe(data => {
        this.secbrews = data;
        console.log(this.brews, this.secbrews);
    });
  }
}
