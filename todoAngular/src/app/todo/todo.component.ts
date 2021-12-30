import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { TaskService } from '../shared/task.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../shared/task.model';
;


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  taskdata!: any[];
  namefieldInput!: string;
  taskfieldInput!: string;

  todoForm: FormGroup = new FormGroup({});
  constructor(
    private taskservice: TaskService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getdata();

    this.todoForm = this.formBuilder.group({
      name: new FormControl(''),
      task: new FormControl(''),
      status: new FormControl('pending'),
    });
  }



  getdata(){
    this.taskservice.getAllTodo().subscribe((data: Task[]) => {
      this.taskdata = data;
      console.log('total data in req: ' + this.taskdata.length);
    });
  }
  addTodo() {

    console.log(this.todoForm.value);
    this.taskservice.postTodo(this.todoForm.value).subscribe(
      (data) => {
        console.log('post');
        this.getdata();
      },
      (err) => {
        console.log(err);
      }
    );
    this.todoForm.reset();
  }

  deleteTodoTAsk(id: string){
    console.log(id);
    this.taskservice.deleteTodo(id).subscribe(
      
      (response) =>{
        console.log(response);
       console.log("Deleted");
       
       
       
        
      }
    )
    window.location.reload();
  }
}
