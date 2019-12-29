import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAnimalForm, IAnimal } from 'src/app/interfaces/mock.interface';
import uuid from 'uuid';
import { MockService } from 'src/app/services/mock.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  myForm: FormGroup;

  id: number;
  name: string;
  image: string;
  habitat: string;
  species: string;

  idMax: number;

  constructor(private fb: FormBuilder, private mockService: MockService, private router: Router) {

    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      image: [''],
      habitat: [''],
      species: [''],
    });

  }

  ngOnInit() {

  }

  AnimalFormToAnimal(values: IAnimalForm): IAnimal {
    const arr = this.mockService.getResponse();
    arr.forEach((value: IAnimal, key: number) => {
      const arrayId = [];
      arrayId.push(value.id);
      this.idMax = Math.max.apply(null, arrayId);
    });
    console.log('La id agregada es: ' + (this.idMax + 1));
    return {
      id: (this.idMax + 1), //  (@TODO: UNDEFINED!! ARREGLAR)
      name: values.name,
      image: values.image,
      characteristics: {
        habitat: values.habitat,
        species: values.species
      },
    };
  }



  onFormSubmit(values: IAnimalForm) {
    const animal: IAnimal = this.AnimalFormToAnimal(values);
    this.mockService.setNewAnimal(animal);
    this.router.navigate(['/']);

  }


}
