import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IBook } from '../interfaces/book';
import { IBookCategory } from '../interfaces/book-category';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookList = new BehaviorSubject<IBook[]>([]);
  bookCategory = new BehaviorSubject<IBookCategory[]>([]);
  constructor() { }

  addBook(body: IBook) {
    let bookList = this.bookList.value;
    bookList.push(body);
    this.bookList.next(bookList);
  }

  getBookCategory() {
    const data = [
      { id: "1", name: 'drama'},
      { id: "2", name: 'comedy'},
      { id: "3", name: 'sport'},
    ]
    this.bookCategory.next(data);
  }
}
