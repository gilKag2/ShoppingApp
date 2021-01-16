import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingrediant } from '../shared/ingrediant.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingrediants: Ingrediant[]
  private subscription: Subscription;
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingrediants = this.slService.getIngrediants();
    this.subscription = this.slService.ingrediantChanged.subscribe(
      (ingrediants: Ingrediant[]) => {
        this.ingrediants = ingrediants;
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();

  }
}
