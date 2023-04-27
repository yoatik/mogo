import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer-area/footer.component';
import { HeaderAreaComponent } from './components/header-area/header-area.component';
import { SharedModule } from './shared.module';
import { SwiperDirectiveDirective } from './swiper-directive.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorAreaComponent } from './components/error-area/error-area.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BlogAreaComponent } from './components/home-page/blog-area/blog-area.component';
import { ClientAreaComponent } from './components/home-page/client-area/client-area.component';
import { PartnerAreaComponent } from './components/home-page/partner-area/partner-area.component';
import { TeamAreaComponent } from './components/home-page/team-area/team-area.component';
import { WhatDoComponent } from './components/home-page/what-do-area/what-do.component';
import { ReviewComponent } from './components/home-page/review-area/review.component';
import { DesignComponent } from './components/home-page/design-area/design.component';
import { CounterAreaComponent } from './components/home-page/counter-area/counter-area.component';
import { AboutAreaComponent } from './components/home-page/about-area/about-area.component';
import { HeroAeraComponent } from './components/home-page/hero-aera/hero-aera.component';
import { ServiceComponent } from './components/home-page/service-area/service.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { PageTitleAreaComponent } from './components/page-title-area/page-title-area.component';
import { ServicePageComponent } from './components/service-page/service-page.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { ContactAreaComponent } from './components/contact-page/contact-area/contact-area.component';
// register();

import { ReactiveFormsModule } from '@angular/forms';
import { BlogPageAreaComponent } from './components/blog-page/blog-page-area/blog-page-area.component';
import { BlogDetailsPageComponent } from './components/blog-details-page/blog-details-page.component';
import { BlogDetailsAreaComponent } from './components/blog-details-page/blog-details-area/blog-details-area.component';
import { WorkAreaComponent } from './components/home-page/work-area/work-area.component';

const appRouter: Routes = [
  // { path: '', component: HomePageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'service', component: ServicePageComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'blog/:id', component: BlogDetailsPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '**', component: ErrorAreaComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    HeroAeraComponent,
    AboutAreaComponent,
    CounterAreaComponent,
    FooterComponent,
    DesignComponent,
    ReviewComponent,
    WhatDoComponent,
    TeamAreaComponent,
    PartnerAreaComponent,
    ClientAreaComponent,
    BlogAreaComponent,
    HeaderAreaComponent,
    SwiperDirectiveDirective,
    ErrorAreaComponent,
    HomePageComponent,
    AboutPageComponent,
    PageTitleAreaComponent,
    ServicePageComponent,
    BlogPageComponent,
    ContactPageComponent,
    ContactAreaComponent,
    BlogPageAreaComponent,
    BlogDetailsPageComponent,
    BlogDetailsAreaComponent,
    WorkAreaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    SharedModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRouter, { scrollPositionRestoration: 'enabled' })

  ],

  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
