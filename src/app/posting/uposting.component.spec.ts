import { EMPTY, from, of, throwError } from 'rxjs';
import { PostingComponent } from './posting.component';
import { PostingService } from './posting.service';

describe('Unit tests for PostingComponent', () => {
  let component: PostingComponent;
  let service: PostingService;
  beforeEach(() => {
    service = new PostingService(null);
    component = new PostingComponent(service);
  });
  xit('should fetch data when ngOnInit', () => {
    const spy = spyOn(service, 'fetch').and.callFake(() => {
      return EMPTY;
    });

    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
  });

  xit('should update posts when ngOnInit', () => {
    const posts = [1, 2, 3, 4];
    // spyOn(service, 'fetch').and.callFake(() => {
    //   return of(posts);
    // });
    spyOn(service, 'fetch').and.returnValue(of(posts));

    component.ngOnInit();

    expect(component.posts.length).toBe(posts.length);
  });

  it('should create and push post to posts in component', () => {
    const spy = spyOn(service, 'create').and.returnValue(
      of({ title: 'mock' })
    );
    component.add('mock title');
    expect(spy).toHaveBeenCalled();
    expect(component.posts.length).toBe(1);
  });

  it('should mark error if ', () => {
    const errorMessage = 'no network!'
    const customError = new Error(errorMessage)
    const spy = spyOn(service, 'create').and.returnValue(
      throwError(() => errorMessage)
    );
    component.add('mock title');
    expect(spy).toHaveBeenCalled();
    expect(component.posts.length).toBe(0);
    expect(component.message).toBe(errorMessage)
  });

  it('should confirm before deleting post', () => {
    const spy = spyOn(service, 'remove').and.returnValue(EMPTY)
    spyOn(window, 'confirm').and.returnValue(true)
    component.delete(10)
    expect(spy).toHaveBeenCalledWith(10)
  })

  it('should avoid deleting if not confirmed', () => {
    const spy = spyOn(service, 'remove').and.returnValue(EMPTY)
    spyOn(window, 'confirm').and.returnValue(false)
    component.delete(10)
    expect(spy).not.toHaveBeenCalledWith(10)
  })
});
