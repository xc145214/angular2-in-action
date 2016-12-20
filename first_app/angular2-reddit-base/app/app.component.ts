import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h1>Hello {{name}}</h1>
    <ul>
        <li *ngFor="let name of names">hello {{ name }}</li>
    </ul>
    `
})
export class AppComponent {
    name: string;
    names: string[];

    constructor() {
        this.name = "Angular";
        this.names = ['Ari', 'Carlos', 'Felipe', 'Nate'];
    }
}