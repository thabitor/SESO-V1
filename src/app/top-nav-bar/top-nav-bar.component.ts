import { Component } from '@angular/core';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent {

  ChangeLang(lang:any) {
    const selectedLanguage = lang.target.value;
    alert(selectedLanguage);
  }

}
