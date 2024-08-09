import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent {
  taskDescription!:string
  constructor(private router: Router) { }
  onClick() {  
    console.log(this.taskDescription);
    this.router.navigate(['/taches/toutes-taches'], { queryParams: { message: 'Hello from Sender!' } });  
  }
}
