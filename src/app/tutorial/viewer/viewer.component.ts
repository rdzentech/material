import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

  constructor() { }
  @Input() loadGitCommands: string;  
  ngOnInit(): void {
  }


  //---------------Angular Series---------------------------------
  get start(): boolean {
    if (this.loadGitCommands == "Your First App") {
      return true;
    };
    return false;
  }
  get sETUP(): boolean {

    if (this.loadGitCommands == "SETUP") {
      return true;
    };
    return false;
  }
  //---------------Git Series---------------------------------
  get gitCommands(): boolean {
    if (this.loadGitCommands == "GitCommands") {
      return true;
    };
    return false;
  }
  get gitDeploy(): boolean {
    if (this.loadGitCommands == "GitDeploy") {
      return true;
    };
    return false;
  }

}
