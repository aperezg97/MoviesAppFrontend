import {Category} from "src/app/core/models/category";

export class Movie {
  public id?: string;
  public name?: string;
  public title?: string;
  public year?: number;
  public description?: string;
  public picture?: string;
  public categories?: Category[];
}
