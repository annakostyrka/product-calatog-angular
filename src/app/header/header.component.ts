import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() totalCartItems: number;
  @Output() onOpenModal = new EventEmitter();
  headerFixed: boolean;

  @HostListener('window:scroll',['$event']) onScroll () {
    if(window.scrollY > 100) {
      this.headerFixed = true
    } else {
      this.headerFixed = false
    }
  }

  openModal() {
    this.onOpenModal.emit();
  }
}
