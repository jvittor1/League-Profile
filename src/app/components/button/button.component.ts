import { Component, EventEmitter, Output } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  xMark = faXmark;
  @Output() onClick = new EventEmitter<void>();

  constructor() { }

  handleClick() {
    this.onClick.emit();
  }
}
