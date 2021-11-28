import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
@Component({
  selector: 'app-verextra',
  templateUrl: './verextra.component.html',
  styleUrls: ['./verextra.component.css']
})
export class VerextraComponent implements OnInit {

  constructor(public server:ServiceService) {

    this.server.getExtraordinarios();

  }

  ngOnInit(): void {
  }

}
