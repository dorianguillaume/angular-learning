import { Song } from './Song';

export class Album {
    private grade: number;
    private liste: Song[];
    
    private _name : string;
    public get name() : string {
        return this._name;
    }
    public set name(v : string) {
        this._name = v;
    }
   
    private _author : string;
    public get author() : string {
        return this._author;
    }
    public set author(v : string) {
        this._author = v;
    }
      

    constructor(name: string, author: string, grade: number, liste: Song[]) {
        this._name = name;
        this._author = author;
        this.grade = grade;
        this.liste = liste;
    }
}