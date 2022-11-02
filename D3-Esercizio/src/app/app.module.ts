import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [AppComponent, HeaderComponent, MainComponent, FooterComponent, HeaderSearchBarComponent, HeaderNavbarBrandComponent, HeaderNavbarCollapseComponent, HeaderItemDropdownComponent, MainCardsComponent, MainCardComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
