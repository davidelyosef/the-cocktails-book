import { Component, OnInit } from '@angular/core';
import { CocktailsService } from 'src/app/services/cocktails.service';
import { Cocktail } from 'src/app/models/cocktail';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cocktails: Cocktail[];

  constructor(private cocktailsService: CocktailsService) { }

  ngOnInit() {
    // getting the cocktails with the letter A by deafult: 
    this.getCocktails('a');

    // buttons from a to z: 
    for (let i = 0; i < 26; i++) {

      const button = document.createElement("button");
      button.innerHTML = (i + 10).toString(36);

      let style = button.style;
      style.color = 'gray';
      style.margin = "3px";
      style.border = "0";
      style.background = 'transparent';
      style.textTransform = 'uppercase';
      style.fontWeight = '700';
      button.onmouseover = () => style.color = '#540000 ';
      button.onmouseleave = () => style.color = 'gray';

      button.onclick = () => this.letterPress(event);
      document.querySelector("#letter-main").appendChild(button);
    }
  }

  // get cocktails by the letter of the button
  public letterPress(e): void {
    const letter = e.target.innerHTML;
    this.getCocktails(letter);
  }

  // get cocktails from the service by first letter
  private getCocktails(letter: string): void {
    this.cocktailsService.getCocktailsByLetter(letter)
      .subscribe(cocktails => {
        this.cocktails = cocktails.drinks;
      }, err => console.log(err.message));
  }

  // search function
  public searching(): void {
    try {
      let value = (<HTMLInputElement>document.getElementById('searchBox')).value;
      const letter = value[0];
      if (letter) {

        this.cocktailsService.getCocktailsByLetter(letter)
        .subscribe(cocktails => {
          this.cocktails = [];

          cocktails.drinks.filter(cocktail => {
            let name = cocktail.strDrink.toLowerCase();
            if (name.includes(value)) this.cocktails.push(cocktail);
          })
        }, err => console.log(err.message));

      }
    }
    catch (err) {
      console.log(err.message);
    }
  }

}
