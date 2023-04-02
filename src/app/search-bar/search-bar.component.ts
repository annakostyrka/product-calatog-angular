import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchBar = new FormControl('');
  @Output() searchInputChanged = new EventEmitter();

  ngOnInit() {
    this.searchBar.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
    )
    .subscribe(val => {
      this.searchInputChanged.emit(val);
    }
    )
  }

}
