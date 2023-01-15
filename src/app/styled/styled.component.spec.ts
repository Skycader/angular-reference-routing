import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledComponent } from './styled.component';

describe('StyledComponent', () => {
  let component: StyledComponent;
  let fixture: ComponentFixture<StyledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
