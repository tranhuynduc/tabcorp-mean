import { IBook } from "../interfaces/book";

export class Book implements IBook{
  title: string;
  description: string;
  category: string;

  constructor(title = '', category = '', desccription = '') {
    this.title = title;
    this.category = category;
    this.description = desccription;
  }
}
