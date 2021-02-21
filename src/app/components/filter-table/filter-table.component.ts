import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.css'],
})
export class FilterTableComponent implements OnInit {
  private responseCategoryList: string[] = [];
  public fitleredCategoryList: string[] = [];
  public searchingText: string = '';
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService.sendGetRequest().subscribe((data: string[]) => {
      this.responseCategoryList = data;
      this.fitleredCategoryList = this.responseCategoryList; //show all data at first time before seaching
    });
  }

  onChangeText() {
    this.fitleredCategoryList = this.responseCategoryList.filter(
      (eachCategory) => {
        return eachCategory
          .toLocaleLowerCase()
          .includes(this.searchingText.toLocaleLowerCase());
      }
    );
  }
}
