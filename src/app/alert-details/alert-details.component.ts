import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert-details',
  templateUrl: './alert-details.component.html',
  styleUrls: ['./alert-details.component.css']
})
export class AlertDetailsComponent implements OnInit {
  @Input() details;
  @Output() close = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.close.emit()
    console.log('game list modal')
  }

}
