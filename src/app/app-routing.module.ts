import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlexCssComponent } from './flex-css/flex-css.component';

const routes: Routes = [
  {
    path: 'flex', component: FlexCssComponent
  },
  {
    path: '', pathMatch: 'full', redirectTo: '/flex'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
