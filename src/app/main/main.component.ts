import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Articles } from '../Articles';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ddlCategory } from '../ddlcategory';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isCollapsed:boolean=false;
  arr: Articles[] = [];
  arr1: Articles[] = [];
  check: boolean;
  totalItem: any;
  totalPages: any;
  all_articles: any;
  Page = 1;
  page: any;
  arr2: Articles[] = [];
  query: any;
  countries$: Observable<Articles[]>;
  filter = new FormControl();
  closeResult: string;
  form: FormGroup;
  read:any;
  category: ddlCategory;
  name = 'Angular 5';
  constructor(private fb: FormBuilder, private _data: ArticleService, private modalService: NgbModal) {

  }


  ngOnInit() {
    this.getData();
    this.getPageInfo();
    this.getCategories();
    this.form = this.fb.group({
      articleId: new FormControl(null),
      articleName: new FormControl(null,[Validators.required]),
      categoryId: new FormControl(null),
      createdBy: new FormControl(null,[ Validators.pattern('[0-9]*')]),
      cretedByName: new FormControl(null)
    });

  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  openEdit(editpopup, item) {
    console.log(item);
    this.form.patchValue({
      articleId: item.articleId,
      articleName: item.articleName,
      content: item.content,
      previewContent: item.previewContent,
      categoryId: item.categoryId,
      categoryName: item.categoryName,
      createdBy: item.createdBy,
      createdByName: item.createdByName,
      createdDate: item.createdDate,
      modifiedBy: item.modifiedBy,
      modifiedByName: item.modifiedByName,
      modifiedDate: item.modifiedDate
    });
    this.modalService.open(editpopup, {
      size: "lg"
    });
  }
  openReadmore(readmore, item) {
    this.modalService.open(readmore, {
      size: "lg"
    });
    this._data.getReadArticles(item.articleId).subscribe(
      (data: Articles[]) => {
        this.read = data;
        console.log(this.read)
      }
    );
  }
  readMoreClose(){
    this.modalService.dismissAll();
  }


  getData() {
    this._data.gatAllData().subscribe(
      (data: Articles[]) => {
        this.arr = data;
        console.log(this.arr);
        this.arr1 = this.arr['kbArticles'];
      });
  }
  getPageInfo() {
    this._data.gatAllData().subscribe(
      (data: Articles[]) => {

        this.arr = data;
        this.page = this.arr['pagerInfo'];
        console.log(this.page);
        this.totalItem = this.arr['pagerInfo'].totalItems;

        this.totalPages = this.arr['pagerInfo'].totalPages;
        this.all_articles = this.arr['kbArticles'];
      }
    );
  }
  showPage(number: number) {
    number = this.Page;
    console.log(number);
    if (number != 0) {
      this._data.getPageByNumber(number).subscribe(
        (x: any) => {
          this.arr = x;

          this.arr1 = this.arr['kbArticles'];

          console.log(this.arr1);
        }
      );
    }
  }
  getCategories() {
    this._data.gatAllData().subscribe(
      (data: Articles[]) => {
        this.arr = data;
        console.log(this.arr);
        this.category = this.arr['ddlCatogoryNames'];
      });
  }
  OnAddArticleSave() {
    console.log(this.form.value);
    this._data.addArti(this.form.value).subscribe(
      (data: any) => {
        this.check = data;
        console.log(this.check);
        alert("articles added");
        this.getData();
        this.form.reset();

      }
    )
  }

  // tslint:disable-next-line: adjacent-overload-signatures


  OnEditArticleSave() {
    this._data.addArti(this.form.value).subscribe(
      (data: any) => {
        this.check = data;
        console.log(this.check);
        alert("articles updated");
        this.getData();
        this.form.reset();

      }
    )
  }

}
