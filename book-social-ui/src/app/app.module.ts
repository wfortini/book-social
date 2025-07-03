import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './modules/book/components/menu/menu/menu.component';
import { LoginComponent } from './pages/login/login/login.component';
import { ActivateAccountComponent } from './pages/activate-account/activate-account/activate-account.component';
import { RegisterComponent } from './pages/register/register.component';
import { BookCardComponent } from './modules/book-card/book-card.component';
import { BookListComponent } from './modules/book/pages/book-list/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    ActivateAccountComponent,
    RegisterComponent,
    BookCardComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
