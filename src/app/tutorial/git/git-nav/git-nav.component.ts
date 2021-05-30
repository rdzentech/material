import { Component, OnInit ,} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-git-nav',
  templateUrl: './git-nav.component.html',
  styleUrls: ['./git-nav.component.css']
})
export class GitNavComponent implements OnInit {

  constructor(
    private _router: Router,
    private _activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    
   this.loadGitCommandsComponent('git-commands')
  } 

  panelOpenState = true;
  public  parentValue:string;

  loadGitCommandsComponent(value: any) { 
    debugger;
  
    this.parentValue=value;
   
    this._router.navigate([value],{relativeTo:this._activatedRoute})
  }


}
