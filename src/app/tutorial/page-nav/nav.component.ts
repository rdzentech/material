import { Component, OnInit , EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  panelOpenState = false;

  @Output() childComponentEvent = new EventEmitter<string>();
  
  gitLoaded=true;

  loadGitCommandsComponent(value:string){
        debugger;

   this.childComponentEvent.emit(value);
}
}
