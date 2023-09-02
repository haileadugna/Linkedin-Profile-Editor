import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfilEditComponent } from './profil-edit/profil-edit.component';
import { ResourceComponent } from './resource/resource.component';
import { ContactComponent } from './contact/contact.component';
import { ChataiComponent } from './chatai/chatai.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  // {path:"home", component:HomeComponent},
  {path:"profiledit", component: ProfilEditComponent},
  {path:"resource", component:ResourceComponent},
  {path: "contact", component:ContactComponent},
  {path: "chatai", component: ChataiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
