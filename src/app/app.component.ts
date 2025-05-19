import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CounterComponent } from "./pages/counter/counter.component";
import { NavBarComponent } from "./components/shared/navBar/navBar.component";
import { FooterComponent } from "./components/shared/footer/footer.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, FooterComponent],
  templateUrl: './app.component.html',

})

export class AppComponent {}
