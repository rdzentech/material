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
    
   this.loadComponent('setup-local')
  } 

  panelOpenState = true;

  loadComponent(value: any) { 
    
    debugger;

  
    this._router.navigate([value],{relativeTo:this._activatedRoute})

  }

}
