import { Component } from '@angular/core';
import { Article } from './article';

@Component({
    selector: 'my-app',
    template: `
    <h1>Hello {{name}}</h1>
    <hr/>
    <ul>
        <li *ngFor="let name of names">hello {{ name }}</li>
    </ul>
    <hr/>
    <form class ="ui large from segment">
        <h3 class="ui header">Add a Link</h3>

        <div class="field">
            <label for="title">Title:</label>
            <input name="title" #newtitle>
        </div>
        <div class="field">
            <label for="link">Link:</label>
            <input name="link" #newlink>
        </div>

        <button (click)="addArticle(newtitle, newlink)"
        class="ui positive right floated button">
            Submit link
        </button>
    </form>

    <hr/>
    <div class="ui grid posts">
       <reddit-article
        *ngFor="let article of sortedArticles()"
        [article]="article">
        </reddit-article>
    </div>
    `
})
export class AppComponent {
    name: string;
    names: string[];
    articles:Article[];

    constructor() {
        this.name = "Angular";
        this.names = ['Ari', 'Carlos', 'Felipe', 'Nate'];
        this.articles = [
            new Article('Angular 2', 'http://angular.io', 3),
            new Article('Fullstack', 'http://fullstack.io', 2),
            new Article('Angular Homepage', 'http://angular.io', 4)
        ];
    }

    addArticle(title:HTMLInputElement,link:HTMLInputElement): void{
        console.log(`Adding article title: ${title.value} and link: ${link.value}`);
        
        this.articles.push(new Article(title.value,link.value,0));

        title.value = '';
        link.value = '';
    }


    sortedArticles():Article[]{
        return  this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
    }
}