import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit, OnChanges, AfterViewInit {

  showTemplate = true
  counter = 0
  array = [1,2,3]
  @Output() eventer = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
    console.log("init");
    
  }

  ngDoCheck() {
    console.log("do check");
    
  }

  ngOnChanges() {
    console.log("counter change")
  }

  ngAfterViewInit() {
    console.log("render")
  }

  get random() {
  return Math.random()
  }

  addToArray() {
    this.array.push(Math.random())
  }

  increment() {
    this.counter++
    this.eventer.emit(this.counter)
  }

  decrement() {
    this.counter--
  }

}
