import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {
  public data = this.dataService.graphsData;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
  }

}
