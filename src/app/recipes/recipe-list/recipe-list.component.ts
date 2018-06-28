import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Miojo', 'Macarrão instantâneo', 'https://img.estadao.com.br/resources/jpg/4/0/1529166653004.jpg'),
    new Recipe(
      'Frango Xadrez', 'Frango com legumes',
      'https://helpbairros.com.br/webhp/wp-content/uploads/2015/03/imagem_china_in_box_3.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
