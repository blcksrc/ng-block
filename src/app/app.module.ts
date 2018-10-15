import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

import { HomeComponent } from './pages/home.component';
import { SearchComponent } from './pages/search.component';
import { PageNotFoundComponent } from './pages/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    UsersModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
