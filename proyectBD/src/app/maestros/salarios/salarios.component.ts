import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-salarios',
  templateUrl: './salarios.component.html',
  styleUrls: ['./salarios.component.css']
})
export class SalariosComponent implements OnInit {

  constructor(public server:ServiceService,public activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( async(params) => {
      await  this.server.getAlForSalario(params['id']);
    } )
   }

  ngOnInit(): void {
  }

}
