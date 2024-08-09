import { Component  } from '@angular/core';
import { Task } from '../task.model';
import { nanoid } from 'nanoid';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.css'
})
export class ShowTaskComponent {

  allTask: Task[] = [
    new Task(nanoid(), 'premiere tâche', false),
    new Task(nanoid(), 'deuxieme tâche', true),
    new Task(nanoid(), 'troisième tâche', false),
    new Task(nanoid(), 'quatrième tâche', true),
  ];
  description!:string

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.description = params['message'] || 'No description';
      console.log(this.description , "provenant de show task");
      
    });
  }
}
