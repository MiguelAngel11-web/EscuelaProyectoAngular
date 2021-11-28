import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TeachersComponent } from './teachers/teachers.component';
import { FooterComponent } from './footer/footer.component';
import { MatterComponent } from './matter/matter.component';
import { LoginTeacherComponent } from './login-teacher/login-teacher.component';
/* Server */
import { ServiceService } from './service.service';
import { VeralumnosComponent } from './maestros/veralumnos/veralumnos.component';
import { VerextraComponent } from './maestros/verextra/verextra.component';
import { VerfaltasComponent } from './maestros/verfaltas/verfaltas.component';
import { SalariosComponent } from './maestros/salarios/salarios.component';
import { ReprobadosComponent } from './maestros/reprobados/reprobados.component';
import { CalifComponent } from './alumno/calif/calif.component';
import { FaltasComponent } from './alumno/faltas/faltas.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    TeachersComponent,
    FooterComponent,
    MatterComponent,
    LoginTeacherComponent,
    VeralumnosComponent,
    VerextraComponent,
    VerfaltasComponent,
    SalariosComponent,
    ReprobadosComponent,
    CalifComponent,
    FaltasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
