import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AdminComponent } from './components/admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GearListComponent } from './components/gear-list/gear-list.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TestingComponent } from './components/testing/testing.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { AboutComponent } from './components/about/about.component';

// NOTE: The route 'testing' is just a temporary playground.
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'gears', component: GearListComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'users', component: ProfileComponent },
  { path: 'testing', component: TestingComponent },
  { path: 'navbar', component: NavBarComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin', component: AdminComponent }, // , data: {requiresLogin: true}
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
