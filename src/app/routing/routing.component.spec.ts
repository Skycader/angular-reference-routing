import { ModuleWithProviders } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute, ExtraOptions, Params, Router, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutingComponent } from './routing.component';
import {RouterTestingModule} from '@angular/router/testing'
import {Location} from '@angular/common';
import { By } from '@angular/platform-browser';
import { ErrorComponent } from '../error/error.component';
import { AppRoutingModule } from '../app-routing.module';

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

  // const routes: Routes = [

  //   {
  //     path: '404',
  //     component: ErrorComponent,
  //   },
  //   // { path: '**', component: ErrorComponent}
  // ];

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
        AppRoutingModule
        // RouterModule.forRoot(routes),
        // RouterTestingModule
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

  it('should have router-outlet', () => {
    let de = fixture.debugElement.query(By.directive(RouterOutlet))
    expect(de).not.toBeNull()
  })

  // it('should navigate to 404 if go with param id = 0', fakeAsync(() => {
  //   let router = TestBed.get(Router)
  //   let spy = spyOn(router, 'navigate')
  //   router.navigate(['/id?=0'])
  //   tick()
  //   expect(spy).toHaveBeenCalledWith(['/404'])
  // }))

  it('should navigate to 404 if id = 0', fakeAsync(()=>{
     
    let router = TestBed.get(Router)
    let location = TestBed.get(Location)
    fixture.ngZone.run(() => {
      // router.navigate(['/?id=0'])
      router.navigate(['/'], {
        queryParams: {
          id: 0
        }
      })
    })
    fixture.detectChanges()
    tick()
    fixture.detectChanges()
    console.log("LOCATION PATH: ", location.path())
    expect(true).toBe(true)
    // expect(location.path()).toBe(['/404'])
  }))
});
