import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetMyComputersServiceService {

  constructor() { }

  public GetComputers()
  {
    let result : number[] = [2,44,7,5,4];

    return result;
  }
}
