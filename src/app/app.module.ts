import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AgmCoreModule } from "@agm/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FrontPageComponent } from "./components/front-page/front-page.component";
import { EuropePageComponent } from "./components/europe-page/europe-page.component";
import { AfricaPageComponent } from "./components/africa-page/africa-page.component";
import { AmericasPageComponent } from "./components/americas-page/americas-page.component";
import { AsiaPageComponent } from "./components/asia-page/asia-page.component";
import { OceaniaPageComponent } from "./components/oceania-page/oceania-page.component";
import { CountryPageComponent } from "./components/country-page/country-page.component";
import { SearchPageComponentComponent } from "./components/search-page-component/search-page-component.component";
import { Ng2SearchPipeModule } from "ng2-search-filter";

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    EuropePageComponent,
    AfricaPageComponent,
    AmericasPageComponent,
    AsiaPageComponent,
    OceaniaPageComponent,
    CountryPageComponent,
    SearchPageComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyD5-Awv8sUsfYxKd3DBnsJ4OUqIddv4P7M"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
