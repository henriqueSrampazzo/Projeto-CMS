import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpService } from './http.service';
import { EventsComponent } from './events/events.component';
import { EventSingleComponent } from './events/event-single/event-single.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { StorageService } from './storage.service';
import { AuthGuard } from './guard/auth.guard';
import { AuthGuard2 } from './guard/auth.guard2';
import { EventComponent } from './events/event/event.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { VerNoticiasComponent } from './vernoticias/vernoticias.component';
import { VerNoticiaComponent } from './vernoticias/vernoticia/vernoticia.component';
import { NoticiaSingleComponent } from './vernoticias/noticiasingle/noticia-single.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ContatoComponent } from './contato/contato.component';
import { CadastraEventoComponent } from './cadastraEvento/cadastraEvento.component';
import { EditarNoticiaSingleComponent } from './editarnoticias/editarnoticiasingle/editar-noticia-single.component';
import { EditarNoticiaComponent } from './editarnoticias/editarnoticia/editarnoticia.component';
import { EditarNoticiasComponent } from './editarnoticias/editarnoticias.component';
import { EditarEventSingleComponent } from './editarevents/editareventsingle/editar-event-single.component';
import { EditarEventsComponent } from './editarevents/editarevents.component';
import { EditarEventComponent } from './editarevents/editarevent/editarevent.component';
import { PegaVariavelService } from './pegaVariavel.service'

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventComponent,
    EventSingleComponent,
    VerNoticiasComponent,
    VerNoticiaComponent,
    NoticiaSingleComponent,
    SignupComponent,
    LoginComponent,
    NoticiasComponent,
    ContatoComponent,
    CadastraEventoComponent,
    EditarNoticiaSingleComponent,
    EditarNoticiaComponent,
    EditarNoticiasComponent,
    EditarEventSingleComponent,
    EditarEventComponent,
    EditarEventsComponent
  ],

  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
<<<<<<< HEAD:Front-CMS/src/app/app.module.ts
  
  providers: [HttpService, StorageService, AuthGuard, PegaVariavelService],
=======
  providers: [HttpService, StorageService, AuthGuard, AuthGuard2, PegaVariavelService],
>>>>>>> 51be06db3dfadc4a57ffc3183bee869532c746ef:eventos-cel/src/app/app.module.ts
  bootstrap: [AppComponent]
})
export class AppModule { }
