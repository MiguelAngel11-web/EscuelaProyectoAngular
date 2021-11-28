import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verfaltas',
  templateUrl: './verfaltas.component.html',
  styleUrls: ['./verfaltas.component.css']
})
export class VerfaltasComponent implements OnInit {

  constructor(public server:ServiceService,public activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( async(params) => {
      await  this.server.getFaltasAl(params['id']);
    } )
   }

  ngOnInit(): void {
  }

}
