import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AuthGuard } from './guard/auth.guard';
import { RoleGuardService } from './guard/role-guard.service';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostComponent } from './post/post.component';

import { ReactivedrivenComponent } from './reactivedriven/reactivedriven.component';
import { SendPostComponent } from './send-post/send-post.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { AddUserComponent } from './user/add-user/add-user.component';

const routes: Routes = [
  {
    path:'reactiveform',
    component:ReactivedrivenComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'templateform',
    component:TemplatedrivenComponent,

  },
  {
    path:'add-user',
    component:AddUserComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'edit-user',
    component:EditUserComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'post',
    component:PostComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin',
    component:AdminComponent,
    canActivate:[RoleGuardService]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'logout',
    component:LogoutComponent
  },
  {
    path:'404',
    component:PagenotfoundComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
