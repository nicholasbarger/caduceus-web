import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { InventoryItemListItem } from './inventory-item-list-item';
import { InventoryItemService } from '../inventory-item.service'

@Component({
  selector: 'inventory-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @Output() onSelected = new EventEmitter<InventoryItemListItem>();

  items: InventoryItemListItem[];

  constructor(private service: InventoryItemService) { }

  ngOnInit() {
    this.getCollection();
  }

  getCollection(): void {
    var filter = null;
    this.service.getCollection(filter).then(response => this.items = response);
  }

  select(item: InventoryItemListItem): void {
    this.onSelected.emit(item);
  }
}
