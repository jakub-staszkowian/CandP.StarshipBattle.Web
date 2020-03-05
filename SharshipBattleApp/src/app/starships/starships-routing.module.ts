import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipsComponent } from './starships.component';
import { CreateStarshipComponent } from './pages/create/create-starship.component';

const routes: Routes = [{
    path: '',
    component: StarshipsComponent,
    children: [
        {
            path: 'create',
            component: CreateStarshipComponent
        }]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class StarshipsRoutingModule {
  }