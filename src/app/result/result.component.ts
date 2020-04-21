import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers: [DataService]
})
export class ResultComponent implements OnInit {

  public searchName: string;
  public searchType: string;
  public data: Array<object>;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      const {name, type} = params;
      this.searchName = name;
      this.searchType = type;
    });

    this.filter();
  }

  public filter(): void {
    this.dataService.getData().subscribe((data: any) => {
      this.data = data.filter((pers: any) => {
        if (pers.type.indexOf(this.searchType) + 1 && pers.name.indexOf(this.searchName) + 1) {
          return pers;
        }
      });

      console.log('asdasd', this.data);
    });
  }

}
