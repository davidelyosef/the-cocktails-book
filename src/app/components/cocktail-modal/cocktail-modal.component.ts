import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cocktail-modal',
  templateUrl: './cocktail-modal.component.html',
  styleUrls: ['./cocktail-modal.component.scss']
})
export class CocktailModalComponent implements OnInit {
  
  public theModal: any = document.getElementById("#blabla");

  constructor() { }

  ngOnInit() {
  }



}
