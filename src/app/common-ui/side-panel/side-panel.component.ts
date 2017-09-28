import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements OnInit {
  @Input() visible: boolean;
  @Output() onToggleVisibility = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toggleVisibility(): void {
    this.visible = !this.visible;
    this.onToggleVisibility.emit(this.visible);
  }
}
