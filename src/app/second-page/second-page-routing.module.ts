import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondPageComponent } from './second-page.component';
import { SecondPageChildComponent } from './second-page-child/second-page-child.component';

const routes: Routes = [ { path: 'page2', title: 'App Page 2', component: SecondPageComponent, children: [{ path: 'page2-child', title: 'App Page 2 Child', component: SecondPageChildComponent }] },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondPageRoutingModule { }
