import {Injectable} from '@angular/core';
import {IData} from '../helpers/data.interface';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public graphsData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: '#42A5F5',
        borderColor: '#1E88E5',
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: 'My Second dataset',
        backgroundColor: '#9CCC65',
        borderColor: '#7CB342',
        data: [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  };

  constructor(
    private http: HttpClient,
  ) {
  }

  public data(): Observable<IData> {
    return this.http.get<IData>('https://5f58c82b8040620016ab872d.mockapi.io/api/text')
      .pipe(
        map((data: IData) => data),
      );
  }
}
