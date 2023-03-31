import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';




@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  
  persona: persona = new persona ("","","");
   
  constructor(private personaService: PersonaService,
    private router: Router) { }

ngOnInit(): void {
   this.personaService.getPersona().subscribe(data => {this.persona = data}
   ,
   err => {
     alert("Error al cargar los datos del perfil.");
     this.volver();
   }
 );
  }

 volver(): void {
  this.router.navigate(['/']);
}
}



