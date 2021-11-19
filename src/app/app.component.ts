import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Recipes';
  loadedFeature = 'recipes';

  onNavigate(loadedFeature){
    this.loadedFeature = loadedFeature;
  }
}
