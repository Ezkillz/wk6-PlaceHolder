import { Component } from '@angular/core';
import { PlaceholderService } from '../Services/placeholder.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private placeholder: PlaceholderService ){}
    displayedColumns: string[] = ['userId','id','title','completed']
  title = 'Placeholder';
  dataSource;

  mgOnInit(): Promise<void>{
    this.dataSource = await this.placeholder.get();
  }
}
