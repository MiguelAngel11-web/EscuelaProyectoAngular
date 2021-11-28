import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  readonly URL = "http://localhost:5000/consultas/";
  public materias;
  public usuario_docente;
  public usuario_al;
  public alumnos_por_docente;
  public salario_tot;
  public falta;
  public faltas_al;
  public add_al;
  public extraordinarios;
  public calif;
  public login_teacher = false;
  public login_al = false;

  constructor(private http:HttpClient) {  }

  getMateria(){
    this.http.get('http://localhost:5000/consultas/materias').subscribe( (mat:any[]) =>{
      this.materias = mat;
      console.log(this.materias);
    })
  }

  async SignIn_Docentes(user:string,contra:string){
    await this.http.get(`http://localhost:5000/consultas/login/docente/${user}/${contra}`).subscribe( async (id_doce:any) => {
      console.log(id_doce.id);
      if(id_doce.id){
      await this.getInfo_Docente(id_doce.id);
      }
    } );
  }

  async SignIn_Alumno(user:string,contra:string){
    await this.http.get(`http://localhost:5000/consultas/login/al/${user}/${contra}`).subscribe( async (id_al:any) => {
      console.log(id_al.id);
      if(id_al.id){
      await this.getInfo_Alumno(id_al.id);
      }
    } );
  }


  async getInfo_Alumno(id:any){
    await this.http.get(`http://localhost:5000/consultas/alumno/${id}`).subscribe( (alumno:any) => {
      this.usuario_al = alumno;
      if(this.usuario_al){
        this.login_al = true;
      console.log(this.usuario_al);
      }
    } );
  }

  async getInfo_Docente(id:any){
    await this.http.get(`http://localhost:5000/consultas/docente/${id}`).subscribe( (docente:any) => {
      this.usuario_docente = docente;
      if(this.usuario_docente){
        this.login_teacher = true;
      console.log(this.usuario_docente);
      }
    } );
  }

  async getAlForDocente(id:any){
    await this.http.get(`http://localhost:5000/consultas/docente/faltas/${id}`).subscribe( (alumnos:any) => {
      this.alumnos_por_docente = alumnos;
      console.log(this.alumnos_por_docente);
    } );
  }

  async getAlForSalario(id:any){
    await this.http.get(`http://localhost:5000/consultas/cal_salario/`).subscribe( (sal:any) => {
      this.salario_tot = sal;
      console.log(this.salario_tot);
    } );
  }

  async addFaltas(id:any,inasistencia:any){
    await this.http.get(`http://localhost:5000/consultas/add/faltas/${id}/${inasistencia}`).subscribe( (faltas:any) => {
      this.falta = faltas;
      alert(this.falta['message'])
      console.log(this.falta);
    } );
  }

  async getFaltasAl(id:any){
    await this.http.get(`http://localhost:5000/consultas/al/faltas/${id}`).subscribe( (faltas:any) => {
      this.faltas_al = faltas;
      console.log(this.faltas_al);
    } );
  }
  async addAlumno(id:any,num_al:any){
    await this.http.get(`http://localhost:5000/consultas/add/al/${id}/${num_al}`).subscribe( (alumno:any) => {
      this.add_al = alumno;
      alert(this.add_al['message'])
      console.log(this.add_al);
    } );
  }
  async getExtraordinarios(){
    await this.http.get(`http://localhost:5000/consultas/extras`).subscribe( (extras:any) => {
      this.extraordinarios = extras;
      console.log(this.extraordinarios);
    } );
  }
  async getCalificaciones(id:any){
    await this.http.get(`http://localhost:5000/consultas/al/calif/${id}`).subscribe( (c:any) => {
      this.calif = c;
      console.log(this.calif);
    } );
  }
  async getFaltas(id:any){
    await this.http.get(`http://localhost:5000/consultas/al/faltas/${id}`).subscribe( (faltas:any) => {
      this.faltas_al = faltas;
      console.log(this.faltas_al);
    } );
  }
}
