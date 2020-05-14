import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(
    private _router: Router,
    private _activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    
   this.loadGitCommandsComponent('git-deploy')
  } 

  panelOpenState = true;
  public  parentValue:string;

  loadGitCommandsComponent(value: any) { 
    debugger;  
    this.parentValue=value;
    //this.parentValue = value;
    this._router.navigate([value],{relativeTo:this._activatedRoute})

  }

}
