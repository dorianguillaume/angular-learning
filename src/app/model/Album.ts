import { Song } from './Song';

export class Album {
    private _songs: Song[];
    public get songs(): Song[] {
        return this._songs;
    }

    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(v: string) {
        this._name = v;
    }

    private _author: string;
    public get author(): string {
        return this._author;
    }
    public set author(v: string) {
        this._author = v;
    }


    private _grade: number;
    public get grade(): number {
        return this._grade;
    }
    public set grade(v: number) {
        this._grade = v;
    }

    
    private _src : string;
    public get src() : string {
        return this._src;
    }
    public set src(v : string) {
        this._src = v;
    }
    

    constructor(name: string, author: string, grade: number, songs: Song[], src: string) {
        this._name = name;
        this._author = author;
        this._grade = grade;
        this._songs = songs;
        this._src = src
    }
}