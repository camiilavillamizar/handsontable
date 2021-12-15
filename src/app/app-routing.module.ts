import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CentralComponent } from './components/central/central.component';
import { HelloComponent } from './components/hello/hello.component';

const routes: Routes = [
  {path: "Hello", component: HelloComponent},
  {path: "central", component: CentralComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
