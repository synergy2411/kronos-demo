import { APP_ROUTES } from './app.routes';
import { ProductModule } from './product/product.module';
import { UsersComponent } from './users/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent, UsersComponent, AboutComponent, ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ProductModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [ DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
