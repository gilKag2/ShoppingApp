import { Subject } from "rxjs";
import { Ingrediant } from "../shared/ingrediant.model";

export class ShoppingListService {

    private ingrediants: Ingrediant[] = [new Ingrediant("apples", 5), new Ingrediant("tomato", 10)];

    ingrediantChanged = new Subject<Ingrediant[]>();

    getIngrediants() {
        return this.ingrediants.slice();
    }

    addIngrediant(ingrediant: Ingrediant) {
        this.ingrediants.push(ingrediant);
        this.ingrediantChanged.next(this.ingrediants.slice());
    }

    addIngrediants(ingrediants : Ingrediant[]) {
        this.ingrediants.push(...ingrediants);
        this.ingrediantChanged.next(this.ingrediants.slice());
    }
}