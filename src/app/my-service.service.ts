import { Injectable } from '@angular/core';
//  indique qu'Angular peut injecter des dépendances dans cette classe
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  
  constructor(
    
  ) { }

  greet(){
    return "Bonjour à tous"
  }
}
