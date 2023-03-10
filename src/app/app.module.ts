import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {AboutComponent} from './about/about.component'
import {HomeComponent} from './home/home.component'
import {PostsComponent} from './posts/posts.component'
import {PostComponent} from './post/post.component'
import {AboutExtraComponent} from './about-extra/about-extra.component';
import { StyledComponent } from './styled/styled.component'
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import { CounterComponent } from './counter/counter.component';
import { FormComponent } from './form/form.component'
import { PostingComponent } from './posting/posting.component';
import { RoutingComponent } from './routing/routing.component'
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { StyleDirective } from './directives/style.directive';
import { ColorDirective } from './directives/color.directive';
import { MypipePipe } from './pipes/mypipe.pipe';
import { FilterPipe } from './pipes/filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    PostsComponent,
    PostComponent,
    AboutExtraComponent,
    StyledComponent,
    ErrorComponent,
    CounterComponent,
    FormComponent,
    PostingComponent,
    RoutingComponent,
    NavbarComponent,
    StyleDirective,
    ColorDirective,
    MypipePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
