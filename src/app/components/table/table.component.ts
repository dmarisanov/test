import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {IData} from '../../helpers/data.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public data: IData;
  public headers = [
    {
      header: 'id',
      field: 'id',
    },
    {
      header: 'name',
      field: 'name',
    },
    {
      header: 'status',
      field: 'status',
    },
    {
      header: 'phoneNumber',
      field: 'phoneNumber',
    },
    {
      header: 'address',
      field: 'address',
    }
  ];

  constructor(
    private dataService: DataService,
  ) {
  }

  public ngOnInit(): void {
    this.dataService.data().subscribe((result) => {
      this.data = result;
    });
  }
}
