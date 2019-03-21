import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { IBook } from 'src/app/interfaces/book';
import { Book } from 'src/app/models/book';
import { IBookCategory } from 'src/app/interfaces/book-category';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.scss']
})
export class BooksFormComponent implements OnInit {
  categories: IBookCategory[] = [];
  book: IBook = new Book();
  @ViewChild('bookForm') bookForm: FormGroup;

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.bookService.bookCategory.subscribe((data: IBookCategory[]) => this.categories = data)
  }

  onAddBook(e) {
    e.preventDefault();
    this.bookService.addBook(this.book);
    this.book = new Book();
    this.bookForm.reset();
  }
}
