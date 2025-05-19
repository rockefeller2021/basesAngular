import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {

  counter = 10;
  counterSignal = signal(10)

  increment(value: number) {
    this.counter += value;
    this.counterSignal.update(current => current + value);
  }

  decrement(value: number) {
    this.counter -= value;
    this.counterSignal.update(current => current - value);

  }

  reset() {
    this.counter = 0;
    this.counterSignal.set(0);
  }






 }
