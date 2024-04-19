import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrl: './products-header.component.css'
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = 'desc';
  itemsShowCount = 12;

  onSortUpdated(newSort: 'asc' | 'desc'): void{
    this.sort=newSort;
  }
  
  onItemsUpdated(count: number): void {
    this.itemsShowCount=count;
  }

  onColumnsUpdated(columnsNumber: number): void{
    this.columnsCountChange.emit(columnsNumber)
  }
}
