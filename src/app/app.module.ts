import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotTableModule } from '@handsontable/angular';
import { ProjectsComponent } from './components/projects/projects.component';
import { TablesComponent } from './components/tables/tables.component';
import { HttpClientModule } from '@angular/common/http';
import { HelloComponent } from './components/hello/hello.component';
import { CentralComponent } from './components/central/central.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    TablesComponent,
    HelloComponent,
    CentralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HotTableModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
