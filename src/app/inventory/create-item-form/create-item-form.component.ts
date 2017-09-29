import { Component, OnInit } from '@angular/core';

import { CreateInventoryItem } from './create-inventory-item';
import { InventoryItemService } from '../inventory-item.service';

@Component({
  selector: 'create-inventory-item-form',
  templateUrl: './create-item-form.component.html',
  styleUrls: ['./create-item-form.component.css']
})
export class CreateItemFormComponent implements OnInit {
  public model: CreateInventoryItem = new CreateInventoryItem();

  constructor(public service: InventoryItemService) { }

  ngOnInit() {
  }

  submit(): void {
    // todo
  }

}
