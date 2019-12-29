import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAnimalForm, IAnimal } from 'src/app/interfaces/mock.interface';
// import uuid from 'uuid';
import { MockService } from 'src/app/services/mock.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.scss']
})
export class FormEditComponent implements OnInit { myFormEdit: FormGroup;

  id: number;
  name: string;
  image: string;
  habitat: string;
  species: string;


  public editAnimal: IAnimal;



  constructor(private fb: FormBuilder, private mockService: MockService, private router: Router) {
    this.myFormEdit = this.fb.group({
      name: ['', [Validators.required]],
      image: [''],
      habitat: [''],
      species: [''],
    });

    this.editAnimal = mockService.editAnimal;  //FUNCIONA, apuntan a la misma direccion de memoria
  }

  ngOnInit() {
    this.name = this.editAnimal.name;
    this.image = this.editAnimal.image;
    this.habitat = this.editAnimal.characteristics.habitat;
    this.species = this.editAnimal.characteristics.species;
  }

  AnimalFormToAnimal(values: IAnimalForm): IAnimal {
    return {
      id: null,
      name: values.name,
      image: values.image,
      characteristics: {
        habitat: values.habitat,
        species: values.species
      },
    };
  }

  onFormSubmitEdit(values: IAnimalForm) {
    const animal: IAnimal = this.AnimalFormToAnimal(values);
    animal.id = this.editAnimal.id;
    console.log(animal);
    this.mockService.setEditAnimalForm(animal);
    this.router.navigate(['/']);

  }
}
