import type { Request, Response } from 'express';
import { pets } from '../data/pets';
import type {Pet, PetQueryParams} from '../data/pets';

export const getPets = (
        req: Request<{}, unknown, {}, PetQueryParams>, 
        res: Response<Pet[]>
    ): void => {
    const {species, adopted, minAge, maxAge} = req.query;

    let matchingPets: Pet[] = pets;

    if (species) {
        matchingPets = pets.filter(
            (pet: Pet): boolean => pet.species.toLowerCase() === species.toLowerCase()
        );
    }

    if (adopted) {
        matchingPets = matchingPets.filter(
            (pet: Pet): boolean => pet.adopted === Boolean(adopted) 
        )
    }

    if (minAge || minAge === 0) {
        matchingPets = matchingPets.filter(
            (pet: Pet): boolean => pet.age >= minAge 
        )
    }

    if (maxAge || maxAge === 0) {
        matchingPets = matchingPets.filter(
            (pet: Pet): boolean => pet.age <= maxAge 
        )
    }

    res.status(200).json(matchingPets);

};

export const getPetByID =  (
        req: Request<{id: string}>, 
        res: Response<Pet | {message: string}>
    ): void => {
    const id: number = Number(req.params.id);
    const pet: Pet | undefined = pets.find(
        (pet: Pet): boolean => pet.id === id
    );

    if (pet) {
        res.status(200).json(pet);
    } else {
      res.status(404).json(
        { message: 'Not Found' }
      );
    }
};
