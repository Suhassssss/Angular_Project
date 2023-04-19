import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicColumnComponent } from './dynamic-column/dynamic-column.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
import { DynamicDataPipe } from './dynamic-data.pipe';
@NgModule({
  declarations: [
    AppComponent,
    DynamicColumnComponent,
    SearchPipe,
    DynamicDataPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
