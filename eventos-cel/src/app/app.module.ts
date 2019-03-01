import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MeucomponentComponent } from './meucomponent/meucomponent.component';
import { MeumoduleModule } from './meucomponent/meumodule/meumodule.module';


import { AppRoutingModule } from './app-routing/app-routing.module';

import { HttpService } from './http.service';
import { EventsComponent } from './events/events.component';
import { EventSingleComponent } from './events/event-single/event-single.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { StorageService } from './storage.service';
import { MakeSubscriptionComponent } from './make-subscription/make-subscription.component';
import { ConfirmComponent } from './make-subscription/confirm/confirm.component';
import { PainelComponent } from './painel/painel.component';
import { UserEventsComponent } from './painel/user-events/user-events.component';
import { AuthGuard } from './guard/auth.guard';
import { EventComponent } from './events/event/event.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { VerNoticiasComponent } from './vernoticias/vernoticias.component';
import { VerNoticiaComponent } from './vernoticias/vernoticia/vernoticia.component';
import { NoticiaSingleComponent } from './vernoticias/noticiasingle/noticia-single.component';

@NgModule({
  declarations: [
    AppComponent,
    MeucomponentComponent,
    EventsComponent,
    EventComponent,
    EventSingleComponent,
    VerNoticiasComponent,
    VerNoticiaComponent,
    NoticiaSingleComponent,
    SignupComponent,
    LoginComponent,
    MakeSubscriptionComponent,
    ConfirmComponent,
    PainelComponent,
    UserEventsComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    MeumoduleModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HttpService, StorageService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
