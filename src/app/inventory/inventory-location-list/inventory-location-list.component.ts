import { Component, OnInit } from '@angular/core';
import { InventoryLocationListItem } from './inventory-location-list-item';
import { InventoryLocationService } from '../inventory-location.service';

@Component({
  selector: 'inventory-location-list',
  templateUrl: './inventory-location-list.component.html',
  styleUrls: ['./inventory-location-list.component.css']
})
export class InventoryLocationListComponent implements OnInit {
  locations: InventoryLocationListItem[] = null;

  constructor(public service: InventoryLocationService) { }

  ngOnInit() {
    this.service.getCollection(null).then(data => this.locations = data);
  }

}
