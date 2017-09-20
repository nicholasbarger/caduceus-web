import { Component, OnInit } from '@angular/core';

import { InventoryItem } from '../inventory-item';
import { InventoryItemService } from '../inventory-item.service'

@Component({
  selector: 'inventory-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: InventoryItem[];

  constructor(private service: InventoryItemService) { }

  ngOnInit() {
    this.getCollection();
  }

  getCollection(): void {
    var filter = null;
    this.service.getCollection(filter).then(response => this.items = response);
  }

}
