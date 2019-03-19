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
import { NoticiasComponent } from '../noticias/noticias.component'
import { NoticiaSingleComponent } from '../vernoticias/noticiasingle/noticia-single.component';
import { VerNoticiasComponent } from '../vernoticias/vernoticias.component';
import { ContatoComponent } from '../contato/contato.component';
import { CadastraEventoComponent } from '../cadastraEvento/cadastraEvento.component';
import { EditarNoticiaSingleComponent } from '../editarnoticias/editarnoticiasingle/editar-noticia-single.component';
import { EditarNoticiasComponent } from '../editarnoticias/editarnoticias.component';
import { EditarEventSingleComponent } from '../editarevents/editareventsingle/editar-event-single.component';
import { EditarEventsComponent } from '../editarevents/editarevents.component';
import { AuthGuard } from '../guard/auth.guard';


const appRoutes: Routes = [
  {path: 'eventos/:slug', component: EventSingleComponent},
  {path: 'noticia/:slug', component: NoticiaSingleComponent},
  {path: 'editarnoticias', component: EditarNoticiasComponent, canActivate: [AuthGuard]},
  {path: 'editarnoticias/:slug', component: EditarNoticiaSingleComponent, canActivate: [AuthGuard]},
  {path: 'editareventos', component: EditarEventsComponent, canActivate: [AuthGuard]},
  {path: 'editareventos/:slug', component: EditarEventSingleComponent, canActivate: [AuthGuard]},
  {path: 'signup', component: SignupComponent},
  {path: 'cadastranoticia', component: NoticiasComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'make-subscription', component: MakeSubscriptionComponent},
  {path: 'make-subscription/confirm', component: ConfirmComponent },
  {path: 'contato', component: ContatoComponent},
  {path: 'cadastraevento', component: CadastraEventoComponent, canActivate: [AuthGuard]},
  {path: 'painel', component: PainelComponent, children: [
  {path: 'events', component: UserEventsComponent}
    ],
    canActivate: [AuthGuard]
  },
 {path: 'eventos', component: EventsComponent},
  {path: '', component: VerNoticiasComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
