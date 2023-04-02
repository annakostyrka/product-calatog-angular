import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-price-range-filter',
  templateUrl: './price-range-filter.component.html',
  styleUrls: ['./price-range-filter.component.scss']
})
export class PriceRangeFilterComponent {
  form: FormGroup;
  minValue = 0;
  maxValue = 50;

  @Output() inputMinValueChanged = new EventEmitter<string>();
  @Output() inputMaxValueChanged = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      rangeStart: new FormControl,
      rangeEnd: new FormControl,
    });
  }

  ngAfterViewInit() {
    this.form.valueChanges.subscribe(val => {
      this.handleMinRangeChanges(val);
    });
  }

  handleMinRangeChanges(event: any) {
    this.minValue = event.target.value;
    this.inputMinValueChanged.emit(event.target.value);
  }
    
  handleMaxRangeChanges(event: any) {
    this.maxValue = event.target.value;
    this.inputMaxValueChanged.emit(event.target.value);
  }
}
