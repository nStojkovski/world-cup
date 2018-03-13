import {Injectable} from "@angular/core";
import {DataFinder} from "./datafinder";
import {Country} from "./Country";

@Injectable()
export class CountryService{

  countries: Country[];

  constructor(private dataFinder: DataFinder){

  }

  public ionViewDidLoad(): any {
    this.dataFinder.getJSONDataAsync("./assets/data/countries.json").then(data => {

      return data;
    });
  }
}
