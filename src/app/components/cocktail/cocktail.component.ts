import { Component, OnInit, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { maxIngredientsOf } from 'src/app/global';
import { Cocktail } from 'src/app/models/cocktail';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {

  public modalRef: BsModalRef;
  @Input('cocktail') theCocktail: Cocktail;
  public ingridiants: string[] = [];
  public measurements: string[] = [];
  public measurePlusIngredients: string[] = [];
  public maxIngredientsOf = maxIngredientsOf;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    for(let i = 1; i <= 15; i++) {
      const ingredient = this.theCocktail['strIngredient' + i];
      const measure = this.theCocktail['strMeasure' + i];
      this.addToIngredients(ingredient);
      this.addMeasure(measure);
      if (ingredient !== null || measure !== null || ingredient === '') {
        this.measurePlusIngredients.push(measure + ' ' + ingredient);
      }
    }
  }

  private addToIngredients(ingredient): void {
    if (ingredient !== null) this.ingridiants.push(ingredient)
  }

  private addMeasure(measure): void {
    if (measure !== null) this.measurements.push(measure);
  }

  public displayModal(template): void {
    this.modalRef = this.modalService.show(template);

    for (let i = 1; i <= 15; i++) {
      let property = 'this.theCocktail.strIngredient' + i;
      property.split('.').reduce;
    }
  }

  public index(obj, is) {
    if (typeof is == 'string')
      return this.index(obj, is.split('.'));
    else if (is.length == 0)
      return obj;
    else
      return this.index(obj[is[0]], is.slice(1));
  }

}
