import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProcessesServiceService {

  constructor() { }

  public GetProcesses(){
    let tabledata = [
      { name: "A", ussage: "1", id: "223", ramUssage: "34" },
      { name: "B", ussage: "1.5", id: "352", ramUssage: "43" },
      { name: "C", ussage: "0.7", id: "743", ramUssage: "46" },
      { name: "D", ussage: "10", id: "643", ramUssage: "54" },
  ];
  return tabledata;
  }
}
