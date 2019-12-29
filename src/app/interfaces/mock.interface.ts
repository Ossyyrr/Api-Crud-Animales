interface ICharacteristics {
    habitat: string;
    species: string;
}


export interface IAnimal {
    id: number;
    name: string;
    image: string;
    characteristics: ICharacteristics;
}

export interface IAnimalForm{
    id: number;
    name: string;
    image: string;
    habitat: string;
    species: string;
}