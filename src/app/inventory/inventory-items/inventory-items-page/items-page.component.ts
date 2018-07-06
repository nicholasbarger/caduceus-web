import { Component, OnInit } from '@angular/core';
import { InventoryItemListItem } from '../inventory-item-list/inventory-item-list-item';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'inventory-items-page',
  templateUrl: './inventory-items-page.component.html',
  styleUrls: ['./inventory-items-page.component.css']
})
export class InventoryItemsPageComponent implements OnInit {

  isCreateVisible: boolean = false;
  isDetailVisible: boolean = false;
  selectedItemId: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {  
        this.selectedItemId = params.id;
        this.isDetailVisible = true;
      }
    });
  }

  onItemSelected(item: InventoryItemListItem): void {
    this.router.navigate(['/inventory/items', item.id]);
  }
  
  toggleCreateVisibility(): void {
    this.isCreateVisible = !this.isCreateVisible;
  }

  toggleDetailVisibility(visible: boolean): void {
    this.isDetailVisible = visible;
  }
}
