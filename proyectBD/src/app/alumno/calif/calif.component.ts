import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calif',
  templateUrl: './calif.component.html',
  styleUrls: ['./calif.component.css']
})
export class CalifComponent implements OnInit {

  constructor(public server:ServiceService,public activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe( async(params) => {
      await  this.server.getCalificaciones(params['id']);
    } )


   }

  ngOnInit(): void {
  }

}
