import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.scss'
})
export class ConvertComponent {
  inputValue: number = 0; //Sätter startvärde
  convertUnits: string = "choose"; //Sätter startvärde
  results: any = "Skriv in värden"; //Resultat är tomt samt any då jag har text + number
  


  convert(): void { 
    switch(this.convertUnits){ //switch sats
      case ("choose"):  //Vid choose
      this.results = "Ogitltigt förfrågan";
      break;

      case ("meter"):  //Vid meter tilll feet
      this.results = (this.inputValue * 3.28) + " Feet"; //Beräkna'
      break;

      case ("feet"):  //Vid feet till meter
      this.results = (this.inputValue * 0.3048) + " Meter"; //Beräkna
      break;

      case ("celcius"):  //Vid celcius till fahrenheit
      this.results = (this.inputValue * 9/5) + 32 + " Fahrenheit"; //Beräkna
      break;

      case ("fahrenheit"):  //Vid fahrenheit till celcius
      this.results = (this.inputValue - 32 ) * 5/9 + " Celcius"; //Beräkna
      break;

    }

}



}
