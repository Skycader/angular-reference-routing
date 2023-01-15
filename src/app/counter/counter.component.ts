import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {

  counter = 0
  @Output() eventer = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
    
  }

  increment() {
    this.counter++
    this.eventer.emit(this.counter)
  }

  decrement() {
    this.counter--
  }

}
