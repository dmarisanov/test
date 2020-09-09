import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})



export class BarComponent implements OnInit {
  public data = this.dataService.graphsData;

  constructor(
    private dataService: DataService,
  ) {
  }

  ngOnInit(): void {
  }

}
