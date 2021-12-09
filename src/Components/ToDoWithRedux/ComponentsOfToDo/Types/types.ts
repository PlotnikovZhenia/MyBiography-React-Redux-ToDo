export interface IInitialState {
    list: IItem[],
    flag: string,
    search: string,
  }
  
  export interface IState {
    form: IInitialState
  }
  
  export interface IItem {
    label:string,
    important: boolean,
    done:boolean,
    id:number
  }
  