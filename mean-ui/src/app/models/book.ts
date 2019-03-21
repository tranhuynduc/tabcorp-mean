import { IBook } from "../interfaces/book";

export class Book implements IBook{
  title: string;
  description: string;
  category: string;
}
