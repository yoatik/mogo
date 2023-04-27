import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  title = 'json-read-example';
  serViceData:any;
  url: string = '/assets/services.json';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.serViceData = res;
    });
  }
}
