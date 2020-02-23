import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FrontPageComponent } from "./components/front-page/front-page.component";
import { EuropePageComponent } from "./components/europe-page/europe-page.component";
import { AfricaPageComponent } from "./components/africa-page/africa-page.component";
import { AmericasPageComponent } from "./components/americas-page/americas-page.component";
import { AsiaPageComponent } from "./components/asia-page/asia-page.component";
import { OceaniaPageComponent } from "./components/oceania-page/oceania-page.component";
import { CountryPageComponent } from "./components/country-page/country-page.component";
import { SearchPageComponentComponent } from "./components/search-page-component/search-page-component.component";

const routes: Routes = [
  {
    path: "search",
    component: SearchPageComponentComponent
  },
  {
    path: "country/:id",
    component: CountryPageComponent,
    pathMatch: "full"
  },
  {
    path: "europe/:id",
    component: CountryPageComponent
  },
  {
    path: "europe",
    component: EuropePageComponent
  },
  {
    path: "africa/:id",
    component: CountryPageComponent
  },
  {
    path: "africa",
    component: AfricaPageComponent
  },
  {
    path: "americas/:id",
    component: CountryPageComponent
  },
  {
    path: "americas",
    component: AmericasPageComponent
  },
  {
    path: "asia/:id",
    component: CountryPageComponent
  },
  {
    path: "asia",
    component: AsiaPageComponent
  },
  {
    path: "oceania/:id",
    component: CountryPageComponent
  },
  {
    path: "oceania",
    component: OceaniaPageComponent
  },
  {
    path: "",
    component: FrontPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
