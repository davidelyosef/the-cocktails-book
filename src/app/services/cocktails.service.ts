import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  constructor(private httpClient: HttpClient) { }

  public getCocktailsByLetter(letter): Observable<any> {
    return this.httpClient.get<[]>("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" + letter );
  }

}
