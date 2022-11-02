import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderSearchBarComponent } from './header-search-bar/header-search-bar.component';
import { HeaderNavbarBrandComponent } from './header-navbar-brand/header-navbar-brand.component';
import { HeaderNavbarCollapseComponent } from './header-navbar-collapse/header-navbar-collapse.component';
import { HeaderItemDropdownComponent } from './header-item-dropdown/header-item-dropdown.component';
import { MainCardsComponent } from './main-cards/main-cards.component';
import { MainCardComponent } from './main-card/main-card.component';
import { Page1ComponentComponent } from './page1-component/page1-component.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { ContactsComponent } from './page2/contacts/contacts.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'page1',
  },
  {
    path: 'page1',
    component: Page1ComponentComponent,
  },
  {
    path: 'page2',
    component: Page2Component,
  },
  {
    path: 'page3',
    component: Page3Component,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HeaderSearchBarComponent,
    HeaderNavbarBrandComponent,
    HeaderNavbarCollapseComponent,
    HeaderItemDropdownComponent,
    MainCardsComponent,
    MainCardComponent,
    Page1ComponentComponent,
    Page2Component,
    Page3Component,
    ContactsComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
