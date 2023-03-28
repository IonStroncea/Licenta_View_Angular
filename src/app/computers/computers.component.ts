import { Component, ViewContainerRef, ViewChild, OnInit  } from '@angular/core';
import { ComputerInfoComponent } from '../computer-info/computer-info.component';
import { GetMyComputersServiceService } from '../get-my-computers-service.service';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent {
  private service : GetMyComputersServiceService;

  constructor(service :GetMyComputersServiceService){
    this.service = service;
  }

  @ViewChild('computersList', {read : ViewContainerRef}) 
  target: ViewContainerRef;

  ngOnInit(){
    setTimeout(()=>{                           // <<<---using ()=> syntax
      this.AddComputers();
  }, 30);
  }

  AddComputers(){
    let list = this.service.GetComputers();

    list.forEach(element => {
      let computer = this.target.createComponent(ComputerInfoComponent);
    });
  }
}
