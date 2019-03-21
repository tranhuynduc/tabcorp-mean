import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { IBook } from '../interfaces/book';
import { IBookCategory } from '../interfaces/book-category';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookList = new BehaviorSubject<IBook[]>([]);
  bookCategory = new BehaviorSubject<IBookCategory[]>([]);
  constructor(
    private http: HttpClient
  ) { }

  addBook(body: IBook): Observable<IBook[]> {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = 'http://localhost:4500/api/books';
    return this.http.post<any>(url, body, httpOptions).pipe(
      tap(res => {
        let bookList = this.bookList.value;
        bookList.push(res['data']);
        this.bookList.next(bookList);
      } ),
    )
  }

  getBooks(): Observable<IBook[]> {
    const url = 'http://localhost:4500/api/books';
    return this.http.get<any>(url).pipe(
      tap(res => this.bookList.next(res['data'])),
    )
  }

  getBookCategory(): Observable<IBookCategory[]> {
    const url = 'http://localhost:4500/api/books/category';
    return this.http.get<any>(url).pipe(
      tap(res => this.bookCategory.next(res['data']))
    )

    
  }
}
