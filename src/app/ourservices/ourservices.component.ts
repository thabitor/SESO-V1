import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './ourservices.component.html',
  styleUrls: ['./ourservices.component.css']
})
export class OurservicesComponent {

  servicesTitle = "Nos services";
  servicesTagLine = "assistance humanitaire aux populations vulnérables";
  services = ["Service Social Général","Accueil DPI(convention Ciré-Fédasil)", "Tutelles MENA","Retour volontaire(REAB)"]
  serviceDescription = "Notre Service Social Général offre une aide sociale généraliste de première ligne aux personnes en difficulté.";



}
