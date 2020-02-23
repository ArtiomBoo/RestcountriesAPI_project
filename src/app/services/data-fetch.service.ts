import { Injectable, HostListener } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Country } from "../models/country.model";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DataFetchService {
  apiAllURL: string = "https://restcountries.eu/rest/v2/all";
  apiCountryURL: string = "https://restcountries.eu/rest/v2/alpha/";
  apiEurope: string = "https://restcountries.eu/rest/v2/region/europe";
  apiAfrica: string = "https://restcountries.eu/rest/v2/region/africa";
  apiAmericas: string = "https://restcountries.eu/rest/v2/region/americas";
  apiAsia: string = "https://restcountries.eu/rest/v2/region/asia";
  apiOceania: string = "https://restcountries.eu/rest/v2/region/oceania";

  constructor(private httpClient: HttpClient) {}

  public getEurope() {
    return this.httpClient.get<any>(this.apiEurope, { observe: "response" });
  }

  public getAsia() {
    return this.httpClient.get<any>(this.apiAsia, { observe: "response" });
  }

  public getAmericas() {
    return this.httpClient.get<any>(this.apiAmericas, { observe: "response" });
  }

  public getAfrica() {
    return this.httpClient.get<any>(this.apiAfrica, { observe: "response" });
  }

  public getOceania() {
    return this.httpClient.get<any>(this.apiOceania, { observe: "response" });
  }

  public getCountry(name: String) {
    return this.httpClient.get<any>(`${this.apiCountryURL}${name}`, {
      observe: "response"
    });
  }
  public getAllCountries() {
    return this.httpClient.get<any>(this.apiAllURL, { observe: "response" });
  }
}
