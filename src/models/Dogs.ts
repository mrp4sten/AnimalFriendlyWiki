import { IAnimal } from "./IAnimal";

export class Dog implements IAnimal {
  name: string;
  image_link: string;
  playfulness: number;

  constructor(name: string, image_link: string, playfulness: number) {
    this.name = name;
    this.image_link = image_link;
    this.playfulness = playfulness;
  }
}