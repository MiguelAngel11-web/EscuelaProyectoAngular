import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogin=false;
  constructor(public server:ServiceService) { }


  async Entrar(user:string,contra:string){
    await this.server.SignIn_Alumno(user,contra);
    console.log('Variable: '+this.server.login_teacher)

    if(this.server.login_al){
      this.isLogin = true;

  }
}

  ngOnInit(): void {
  }

}
