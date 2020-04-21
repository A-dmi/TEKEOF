import {of, Observable} from 'rxjs';

export class DataService {
  private data: Array<object> = [
    { id: 1, name: 'djon', type: 'men' },
    { id: 2, name: 'nik', type: 'men' },
    { id: 3, name: 'ana', type: 'women' },
    { id: 4, name: 'lena', type: 'women' },
    { id: 5, name: 'vlad', type: 'men' },
    { id: 6, name: 'gera', type: 'men' },
    { id: 7, name: 'mari', type: 'women' },
    { id: 8, name: 'den', type: 'men' },
    { id: 9, name: 'li', type: 'women' },
    { id: 10, name: 'brad', type: 'men' },
  ];

  // @ts-ignore
  public getData(): Observable<any> {
    return of(this.data);
  }
}
