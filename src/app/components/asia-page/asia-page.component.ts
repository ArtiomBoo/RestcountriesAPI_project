import { Component, OnInit } from '@angular/core';
import { Country } from "../../models/country.model";
import { DataFetchService } from "../../services/data-fetch.service";

@Component({
  selector: 'app-asia-page',
  templateUrl: './asia-page.component.html',
  styleUrls: ['./asia-page.component.css']
})
export class AsiaPageComponent implements OnInit {
  constructor(private DataFetchService: DataFetchService) { }
  cAnyList: any[] = [];
  cList: Country[] = [];

  ngOnInit() {
    this.DataFetchService.getAsia().subscribe(res => {
      console.log(res.body);
      this.cAnyList = [...res.body];
      this.cAnyList.forEach(element => {
        console.log(element.name);
        this.cList.push({
          name: element.name,
          capital: element.capital,
          population: element.population,
          flag: element.flag,
          cioc: element.cioc,
          languages: element.languages,
          alpha2Code: element.alpha2Code
        });
      });
    });
  }

}
