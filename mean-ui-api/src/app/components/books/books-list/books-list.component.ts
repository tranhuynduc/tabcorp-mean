import { Component, OnInit, Input } from '@angular/core';
import { IBook } from 'src/app/interfaces/book';
import { BookService } from 'src/app/services/book.service';
import { IBookCategory } from 'src/app/interfaces/book-category';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  @Input() bookList: IBook[];
  categories: IBookCategory[] = [];
  
  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.bookService.bookCategory.subscribe((data: IBookCategory[]) => this.categories = data)
  }
  getCategory(id: string) {
    if (!id) return;
    
    const category = this.categories.find(category => category.id === id);
    return category.name;
  }
}
