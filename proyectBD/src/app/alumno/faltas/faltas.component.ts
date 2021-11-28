import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faltas',
  templateUrl: './faltas.component.html',
  styleUrls: ['./faltas.component.css']
})
export class FaltasComponent implements OnInit {

  constructor(public server:ServiceService,public activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe( async(params) => {
      await  this.server.getFaltasAl(params['id']);
    } )


  }

  ngOnInit(): void {
  }

}
