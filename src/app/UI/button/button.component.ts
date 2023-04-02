import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() buttonText = "Click the button"
  @Input() buttonType: string = '';

  primaryColor = '#27c7cd';
  secondaryColor = '#333d44';
}
