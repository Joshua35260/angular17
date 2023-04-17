import { Component } from '@angular/core';
import { GetApiService } from './get-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
  data: any;
  constructor(private getApiService: GetApiService) {}

  getData() {
    this.getApiService.getData().subscribe(data => {
      console.log(data);
      this.data = data;
      
    });
  }
}