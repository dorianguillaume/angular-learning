export class User{

    private _name: string;
    private _firstname: string;

    
    public get name(): string{
        return this._name
    }
    
    
    /**
     *
     */
    constructor(name: string, firstname: string) {
        this._name = name;
        this._firstname = firstname;        
    }

   
}