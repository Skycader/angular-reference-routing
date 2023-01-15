import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CounterComponent } from './counter.component';

describe('integrated spec for counter', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent],
    });

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeDefined();
  });

  it('should render counter property', () => {
    let num = 42;
    component.counter = num;
    fixture.detectChanges();

    let debugElement = fixture.debugElement.query(By.css('.counter'));
    let el: HTMLElement = debugElement.nativeElement;

    expect(el.textContent).toContain(num.toString());
  });

  it('should have class green on even number', () => {
    let num = 12;
    component.counter = num;
    fixture.detectChanges();

    let debugElement = fixture.debugElement.query(By.css('.counter'));
    let el: HTMLElement = debugElement.nativeElement;

    expect(el.classList).toContain('green');
  });

  it('should increment counter if increment btn clicked', () => {
    
    let debugElement = fixture.debugElement.query(By.css('#increment'));
    let el: HTMLElement = debugElement.nativeElement;

    el.click()
    debugElement.triggerEventHandler("click")
    expect(component.counter).toBe(2);
  });

  
});
