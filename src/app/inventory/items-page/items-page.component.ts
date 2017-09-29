import { Component, OnInit } from '@angular/core';
import { InventoryItemListItem } from '../item-list/inventory-item-list-item';

@Component({
  selector: 'inventory-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.css']
})
export class InventoryItemsPageComponent implements OnInit {

  isCreateVisible: boolean = false;
  isDetailVisible: boolean = false;
  selectedItemId: number;

  constructor() { }

  ngOnInit() {
  }

  onItemSelected(item: InventoryItemListItem): void {
    this.selectedItemId = item.id;
    this.isDetailVisible = true;
  }
  
  toggleCreateVisibility(): void {
    this.isCreateVisible = !this.isCreateVisible;
  }

  toggleDetailVisibility(visible: boolean): void {
    this.isDetailVisible = visible;
  }
}
