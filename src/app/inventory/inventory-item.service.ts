import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { InventoryItem } from './inventory-item';
import { InventoryItemDetail } from './inventory-item-detail/inventory-item-detail';
import { InventoryItemListItem } from './item-list/inventory-item-list-item';
import { SelectListItem } from '../common-ui/select-list/select-list-item';

@Injectable()
export class InventoryItemService {
  private apiUrl = 'http://localhost:5000/api/inventoryitem';

  constructor(private http: Http) { }

  getCollection(filter): Promise<InventoryItemListItem[]> {
    // todo: add data from filter
    
    // return this.http.get(this.apiUrl)
    //   .toPromise()
    //   .then(response => response.json() as InventoryItem[])
    //   .catch(this.handleError);

    var fakeItems: InventoryItemListItem[] = [
      new InventoryItemListItem(1, 'DaisyCutter', 'DC2016', 'Active'),
      new InventoryItemListItem(2, 'Vallejo', 'V2017', 'Active')
    ];
    return Promise.resolve(fakeItems);
  }

  getSelectListCollection(): Promise<SelectListItem[]> {
    // todo: replace fake
    var fakeData: SelectListItem[] = [
      new SelectListItem(1, 'Item 1'),
      new SelectListItem(2, 'Item 2'),
      new SelectListItem(3, 'Item 3'),
    ];

    return Promise.resolve(fakeData);
  }

  getSingle(id: number): Promise<InventoryItemDetail> {
    // return this.http.get(this.apiUrl + '/' + id)
    //   .toPromise()
    //   .then(response => response.json() as InventoryItem)
    //   .catch(this.handleError);

    return Promise.resolve(new InventoryItemDetail(
      '1001', 'DC2016', 'Daisy Cutter high grain alcohol', 10, 5, 'DaisyCutter', '1',
      'Active', 'EA', 16, 15)
    );
  }

  private handleError(error: any) {
    console.error('An error occurred: ' + error);  // todo: replace with real error handling (and centralize)
    return Promise.reject(error.message || error);
  }
}
