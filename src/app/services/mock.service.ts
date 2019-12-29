import { Injectable, ɵConsole } from "@angular/core";
import { response } from "../api/api-mock";
import { IAnimal, IAnimalForm } from "../interfaces/mock.interface";

@Injectable({
  providedIn: "root"
})
export class MockService {
  public animals: IAnimal[];
  public editAnimal: IAnimal;

  constructor() {
    this.animals = response;
  }

  getResponse() {
    return this.animals;
  }

  public setNewAnimal(animal: IAnimal) {
    this.animals.push(animal);
  }

  public setEditAnimal(animal: IAnimal) {
    this.editAnimal = animal;
    console.log(this.editAnimal);
  }

  public setEditAnimalForm(animal: IAnimal) {
    this.animals.forEach((value: IAnimal, key: number) => {
      if (value.id === animal.id) {
        this.animals[key] = animal;
      } else {
         console.log('error con los id');
      }
    });
    console.log(animal);
  }

  public setDeleteAnimal(id: number): void {
    this.animals.forEach((value: IAnimal, key: number) => {
      if (value.id === id) {
        this.animals.splice(key, 1);
      }
    });
  }
}
