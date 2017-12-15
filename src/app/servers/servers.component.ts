import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: '<app-server></app-server><app-server></app-server>',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	allowNewServer = false;
	serverCreationStatus = 'No server was created!';
	serverName = 'TestServer';
	serverCreated = false;
	servers = ['Testserver', 'Testserver 2'];

	constructor() { 
		// msm coisa q: function() {}
		setTimeout( () => {
			this.allowNewServer = true;
		} , 2000);
	}
	
	ngOnInit() {

	}

	onCreateServer(){
		this.serverCreated = true;
		this.servers.push(this.serverName);
		this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
	}

	onUpdateServerName(event : any) {
		// console.log(event);
		// this.serverName =event.target.value;
		this.serverName = (<HTMLInputElement>event.target).value; //Apenas para informar que o tipo do elemento é um input do HTML (é um cast)
	}
}
