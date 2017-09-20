import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { InventoryItem } from './inventory-item';

@Injectable()
export class InventoryItemService {
  private apiUrl = 'http://localhost:5000/api/inventoryitem';

  constructor(private http: Http) { }

  getCollection(filter): Promise<InventoryItem[]> {
    // todo: add data from filter
    
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response => response.json() as InventoryItem[])
      .catch(this.handleError);
  }

  getSingle(id: number): Promise<InventoryItem> {
    return this.http.get(this.apiUrl + '/' + id)
      .toPromise()
      .then(response => response.json() as InventoryItem)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred: ' + error);  // todo: replace with real error handling (and centralize)
    return Promise.reject(error.message || error);
  }
}
