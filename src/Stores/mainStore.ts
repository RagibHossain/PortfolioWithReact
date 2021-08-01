import { action, makeObservable, observable  } from "mobx"
import { createContext } from "react";

export class Mainstore{


    constructor() {
       makeObservable(this);
        
    }
    @observable lightMode = false;
    @action setMode = () => {
        this.lightMode = !this.lightMode;
    }

}
export const MainstoreContext = createContext(new Mainstore());