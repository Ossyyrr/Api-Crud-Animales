import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IAnimal } from '../../interfaces/mock.interface';
import { MockService } from 'src/app/services/mock.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public animals: IAnimal[];

  constructor(private service: MockService, private router: Router) {
    console.log(service);
    this.animals = [];
    this.animals = this.service.getResponse();
   }

  ngOnInit() {
  }

  public editButton(animal: IAnimal): void {
    this.service.setEditAnimal(animal);
    this.router.navigate(['/edit']);

  }

  public deleteButton(id: number): void {
    this.service.setDeleteAnimal(id);
  }
}
