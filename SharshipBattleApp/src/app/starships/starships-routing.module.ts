import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipsComponent } from './starships.component';
import { CreateStarshipComponent } from './pages/create/create-starship.component';
import { EditStarshipComponent } from './pages/edit/edit-starship.component';
import { StarshipsListComponent } from './pages/list/starships-list.component';

const routes: Routes = [{
    path: '',
    component: StarshipsComponent,
    children: [
        {
            path: 'create',
            component: CreateStarshipComponent
        },
        {
            path: 'edit',
            component: EditStarshipComponent
        },
        {
            path: 'list',
            component: StarshipsListComponent
        }]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class StarshipsRoutingModule {
  }