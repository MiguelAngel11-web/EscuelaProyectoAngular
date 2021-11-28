import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TeachersComponent } from './teachers/teachers.component';
import { MatterComponent } from './matter/matter.component';
import { LoginTeacherComponent } from './login-teacher/login-teacher.component';
import { VeralumnosComponent } from './maestros/veralumnos/veralumnos.component';
import { SalariosComponent } from './maestros/salarios/salarios.component';
import { VerfaltasComponent } from './maestros/verfaltas/verfaltas.component';
import { VerextraComponent } from './maestros/verextra/verextra.component';
import { CalifComponent } from './alumno/calif/calif.component';
import { FaltasComponent } from './alumno/faltas/faltas.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
   {path:'login',component:LoginComponent},
   {path:'teach',component:TeachersComponent},
   {path:'matter',component:MatterComponent},
   {path:'login-teacher',component:LoginTeacherComponent},
   {path:'veralumnos/:id',component:VeralumnosComponent},
   {path:'salarios',component:SalariosComponent},
   {path:'faltas/:id',component:VerfaltasComponent},
   {path:'extras',component:VerextraComponent},
   {path:'calif/:id',component:CalifComponent},
   {path:'faltas_al/:id',component:FaltasComponent},
  /*{path:'homeAdmin',component:HomeAdminComponent, */
    /* canActivate:[RutasLimitadasGuard] }, */
  /*Redireccionamientos al iniciar la app o un 404 */
  {path: '',pathMatch:'full',redirectTo: 'home'},
  {path: '**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
