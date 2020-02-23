import { Component, OnInit, Input } from "@angular/core";
import {
  Router,
  NavigationExtras,
  ActivatedRoute,
  Params
} from "@angular/router";
import { Country } from "../../models/country.model";
import { DataFetchService } from "../../services/data-fetch.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-country-page",
  templateUrl: "./country-page.component.html",
  styleUrls: ["./country-page.component.css"]
})
export class CountryPageComponent implements OnInit {
  //@Input() country: Country;
  nameFromQuerry: string;
  country: any = null;
  loading: boolean = true;
  flag: string = "";
  countrySubscription: Subscription;
  cords: number[] = [];
  latitude: number = 0;
  longtitude: number = 7.8;

  constructor(
    private route: ActivatedRoute,
    private dataFetchService: DataFetchService
  ) {
    //console.log(this.country.name)
  }

  ngOnInit() {
    this.countrySubscription = this.route.params.subscribe((params: Params) => {
      this.nameFromQuerry = this.route.snapshot.params.id;
      this.dataFetchService.getCountry(this.nameFromQuerry).subscribe(res => {
        this.country = res.body;
        this.loading = false;
      });
    });
  }
}
