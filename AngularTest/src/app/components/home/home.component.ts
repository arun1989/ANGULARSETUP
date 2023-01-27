import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public records:any = [];
  constructor(
    private services: ServicesService,
  ) { }

  ngOnInit(): void {

     //api called
     this.services.allRecords().pipe().subscribe(async data => {
      if (data.code == 200) {
        this.records = data.result;
      } else {
       console.log(data);
      }
    });
  }

}
