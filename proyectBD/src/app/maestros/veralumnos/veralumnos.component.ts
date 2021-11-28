import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-veralumnos',
  templateUrl: './veralumnos.component.html',
  styleUrls: ['./veralumnos.component.css']
})
export class VeralumnosComponent implements OnInit {

  constructor(public server:ServiceService,public activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe( async(params) => {
      console.log(params['id'])
      await  this.server.getAlForDocente(params['id']);
    } )

   }

  ngOnInit(): void {
  }

}
