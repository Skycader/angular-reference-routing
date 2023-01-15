import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { PostingComponent } from "./posting.component";
import { PostingService } from "./posting.service";

describe('integrated test for posting component', () => {

  let fixture: ComponentFixture<PostingComponent>
  let component: PostingComponent
  let service: PostingService
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostingComponent],
      providers: [PostingService],
      imports: [HttpClientModule]
    })

    fixture = TestBed.createComponent(PostingComponent)
    component = fixture.componentInstance
    service = fixture.debugElement.injector.get(PostingService)
    //service = TestBed.get(PostingService)

  })

  it('should run fetch on ngInit and collect posts', () => {
    const posts = [1,2,3]
    spyOn(service, 'fetch').and.returnValue(of(posts))
    fixture.detectChanges()
    expect(component.posts).toEqual(posts)
  });
});
