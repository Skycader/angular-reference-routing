import { ModuleWithProviders } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, ExtraOptions, Params, Router, RouterModule, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutingComponent } from './routing.component';
import {RouterTestingModule} from '@angular/router/testing'
class RouterStub {
  navigate(path: string[]) {}
}

class ActivatedRouteStub {
  params: Observable<Params>
}


// const fakeActivatedRoute = {
//   snapshot: { data: {  } }
// } as ActivatedRoute;


describe('RoutingComponent', () => {
  let component: RoutingComponent;
  let fixture: ComponentFixture<RoutingComponent>;

  beforeEach(() => {
   TestBed.configureTestingModule({
      declarations: [ RoutingComponent ],
      providers: [
         
          // Router
        // {provide: Router, useClas: RouterStub},
        // {provide: ActivatedRoute, useClas: ActivatedRouteStub},
        // {provide: ActivatedRoute, useValue: fakeActivatedRoute}
        
      ],
      imports: [
        RouterTestingModule
      ]
    })
    
    fixture = TestBed.createComponent(RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to posts if go back', () => {
    let router = TestBed.get(Router)
    let spy = spyOn(router, 'navigate')
    component.goBack()
   
    expect(spy).toHaveBeenCalledWith(['/posts'])
  })
});
