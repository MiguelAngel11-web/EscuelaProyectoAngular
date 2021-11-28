import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-matter',
  templateUrl: './matter.component.html',
  styleUrls: ['./matter.component.css']
})
export class MatterComponent implements OnInit {


  constructor(public server:ServiceService) {
    this.server.getMateria();
   }



  ngOnInit(): void {

  }

}
