import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from '../components/first-component/first-component.component';
import { ListRenderComponent } from '../components/list-render/list-render.component';
import { IfRenderComponent } from '../components/if-render/if-render.component';
import { ParentDataComponent } from '../components/parent-data/parent-data.component';
import { DirectivesComponent } from '../components/directives/directives.component';
import { EventosComponent } from '../components/eventos/eventos.component';
import { OnemitEventosComponent } from '../components/onemit-eventos/onemit-eventos.component';
import { ChangeNumberComponent } from '../components/change-number/change-number.component';
import { PipesComponent } from '../components/pipes/pipes.component';
import { TwoWayBindingComponent } from '../components/two-way-binding/two-way-binding.component';
import { ItemDetailComponent } from '../components/item-detail/item-detail.component';
const routes: Routes = [
  {path: '', component: FirstComponentComponent},
  {path: 'list', component: ListRenderComponent},
  {path: 'parent', component: ParentDataComponent},
  {path: 'ifrender', component: IfRenderComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'eventos', component: EventosComponent},
  {path: 'onemit', component: OnemitEventosComponent},
  {path: 'changenumber', component: ChangeNumberComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'twowayb', component: TwoWayBindingComponent},
  {path: 'list/:id', component: ItemDetailComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
