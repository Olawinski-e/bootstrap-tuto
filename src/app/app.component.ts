import { Component } from "@angular/core";
import { post } from "selenium-webdriver/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = " my amazing blog";
  date = new Date();

  posts = [
    {
      title: "Modjo",
      content:
        "Il a à peine 1 an et 4 mois que c'est déjà le plus fort de tous les chiens. En plus d'être beau et intelligent, il est rigolo.",
      loveIts: "number",
      created_at: this.date
    },
    {
      title: "Tiifo",
      content:
        "Oui je sais, pas commun comme prénom. Mais bon, c'est pas moi qui ai choisi. Alors t'es gentil, tu feras avec.",
      loveIts: "number",
      created_at: this.date
    },
    {
      title: "Julo",
      content:
        "Lui c'est mon copain et on se marre bien. Je préfère quand même mon chien mais bon, il sait être utile parfois. Alors je le garde aussi.",
      loveIts: "number",
      created_at: this.date
    }
  ];

  constructor() {}
}
