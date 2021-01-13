import { EventEmitter, Injectable } from "@angular/core";
import { Ingrediant } from "../shared/ingrediant.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    constructor(private slService : ShoppingListService){}

    private recipes: Recipe[] = [
        new Recipe("Shnitzel",
            "tasy shnitzel"
            , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTA3BOvpOsMc80xyKWDMMn8992D2j7v64Qmw&usqp=CAU",
            [new Ingrediant("Meat", 1), new Ingrediant("Fries", 5)]),
        new Recipe("test 2",
            "saff",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTA3BOvpOsMc80xyKWDMMn8992D2j7v64Qmw&usqp=CAU",
            [])
    ];


    sendIngrediantsToShoppingList(ingrediants : Ingrediant[]) {
        this.slService.addIngrediants(ingrediants);
    }

    getRecipes() {
        return this.recipes.slice();
    }
}