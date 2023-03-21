import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  products: any = [];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products)
    });
  }
}
