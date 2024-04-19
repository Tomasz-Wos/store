import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  categories = ['shoes', 'sports'];
  @Output() showCategory = new EventEmitter<string>()

  onShowCategory(category: string): void{
    this.showCategory.emit(category)
  }
}
