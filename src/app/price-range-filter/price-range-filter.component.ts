import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-price-range-filter',
  templateUrl: './price-range-filter.component.html',
  styleUrls: ['./price-range-filter.component.scss']
})
export class PriceRangeFilterComponent implements OnInit {
  form: FormGroup;
  minValue = 0;
  maxValue = 50;
  minRangeStart$: Observable<string>;
  maxRangeEnd$: Observable<string>;

  @Output() inputMinValueChanged = new EventEmitter<string>();
  @Output() inputMaxValueChanged = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      rangeStart: new FormControl('0'),
      rangeEnd: new FormControl('50'),
    });
  }

  ngOnInit(): void {
    this.minRangeStart$ = this.form.get('rangeStart').valueChanges;
    this.maxRangeEnd$ = this.form.get('rangeEnd').valueChanges;
    
    this.minRangeStart$.subscribe(val => {
      this.minValue = parseInt(val);
      this.inputMinValueChanged.emit(val);
    });
    this.maxRangeEnd$.subscribe(val => {
      this.maxValue = parseInt(val);
      this.inputMaxValueChanged.emit(val);
    });
  }
}
