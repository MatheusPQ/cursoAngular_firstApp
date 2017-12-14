import { Component } from '@angular/core';


@Component({
    selector: 'app-server', // A tag html, basicamente
    templateUrl: './server.component.html' // O arquivo html
})

export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'Offline';

    getServerStatus() {
        return this.serverStatus;
    }
}