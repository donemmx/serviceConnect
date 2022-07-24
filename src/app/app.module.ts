import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginOneComponent } from './pages/login-one/login-one.component';
import { LoginTwoComponent } from './pages/login-two/login-two.component';
import { RegisterOneComponent } from './pages/register-one/register-one.component';
import { RegisterTwoComponent } from './pages/register-two/register-two.component';
import { HomeComponent } from './pages/home/home.component';
import { BloggComponent } from './pages/blogg/blogg.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AdsComponent } from './pages/ads/ads.component';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { PostJobComponent } from './pages/post-job/post-job.component';
import { PostAdComponent } from './pages/post-ad/post-ad.component';
import { SearchComponent } from './pages/search/search.component';
import { JobComponent } from './pages/job/job.component';
import { JobDetailComponent } from './pages/job-detail/job-detail.component';
import { AdDetailComponent } from './pages/ad-detail/ad-detail.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardOneComponent } from './card-one/card-one.component';
import { CardTwoComponent } from './card-two/card-two.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginOneComponent,
    LoginTwoComponent,
    RegisterOneComponent,
    RegisterTwoComponent,
    HomeComponent,
    BloggComponent,
    BlogComponent,
    AdsComponent,
    HowItWorksComponent,
    PostJobComponent,
    PostAdComponent,
    SearchComponent,
    JobComponent,
    JobDetailComponent,
    AdDetailComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    CardOneComponent,
    CardTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
