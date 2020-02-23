import { Component, OnInit } from "@angular/core";
import { Country } from "../../models/country.model";
import { DataFetchService } from "../../services/data-fetch.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-search-page-component",
  templateUrl: "./search-page-component.component.html",
  styleUrls: ["./search-page-component.component.css"]
})
export class SearchPageComponentComponent implements OnInit {
  constructor(private DataFetchService: DataFetchService) {}
  cAnyList: any[] = [];
  cList: Country[] = [];
  searchText;

  ngOnInit() {
    this.DataFetchService.getAllCountries().subscribe(res => {
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
