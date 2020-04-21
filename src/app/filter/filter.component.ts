import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {Subscription} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  public searchForm: FormGroup;

  public searchName: string;
  public searchType: string;

  private searchFormSubscription: Subscription;

  constructor(private fb: FormBuilder, private router: Router) {
    this.searchForm = this.initForm();
  }

  ngOnInit() {
    this.searchFormSubscription = this.searchForm.valueChanges
      .pipe(
        debounceTime(200)
      )
      .subscribe((value) => {
        const {searchName, searchType} = value;
        this.searchName = searchName;
        this.searchType = searchType;
      });
  }

  private initForm(): FormGroup {
    const form: FormGroup = this.fb.group({
      searchName: this.fb.control(''),
      searchType: this.fb.control(''),
    });

    return form;
  }

}
