import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './../events/events.component';
import { EventSingleComponent } from './../events/event-single/event-single.component';
import { SignupComponent } from './../signup/signup.component';
import { LoginComponent } from '../login/login.component';
import { MakeSubscriptionComponent } from '../make-subscription/make-subscription.component';
import { ConfirmComponent } from '../make-subscription/confirm/confirm.component';
import { PainelComponent } from './../painel/painel.component';
import { UserEventsComponent } from '../painel/user-events/user-events.component';
import { AuthGuard } from '../guard/auth.guard';

const appRoutes: Routes = [
  {path: 'event/:slug', component: EventSingleComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'make-subscription', component: MakeSubscriptionComponent},
  { path: 'make-subscription/confirm', component: ConfirmComponent },
  {path: 'painel', component: PainelComponent, children: [
      {path: 'events', component: UserEventsComponent}
    ],
    canActivate: [AuthGuard]
  },
  {path: '', component: EventsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
