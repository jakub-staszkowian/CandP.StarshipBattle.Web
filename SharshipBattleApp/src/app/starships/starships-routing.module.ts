import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipsComponent } from './starships.component';
import { StarshipsListComponent } from './pages/list/starships-list.component';
import { UpsertStarshipComponent } from './pages/upsert/upsert-starship.component';

const routes: Routes = [{
    path: '',
    component: StarshipsComponent,
    children: [
        {
            path: 'create',
            component: UpsertStarshipComponent
        },
        {
            path: 'edit',
            component: UpsertStarshipComponent
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