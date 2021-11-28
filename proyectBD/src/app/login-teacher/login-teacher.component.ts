import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login-teacher',
  templateUrl: './login-teacher.component.html',
  styleUrls: ['./login-teacher.component.css']
})
export class LoginTeacherComponent implements OnInit {

  isLogin=false;
  constructor(public server:ServiceService) { }

  async Entrar(user:string,contra:string){
    await this.server.SignIn_Docentes(user,contra);
    console.log('Variable: '+this.server.login_teacher)

    if(this.server.login_teacher){
      this.isLogin = true;

  }
}

  async AgregarFaltas(id:number,inasistencia:number){
    await this.server.addFaltas(id,inasistencia);
  }
  async AgregarAlumno(id:number,num_al:number){
    await this.server.addAlumno(id,num_al);
  }

  ngOnInit(): void {

  }

}
