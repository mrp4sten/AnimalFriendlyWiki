import { Animals } from './controller/Animals';
import { Cat } from './models/Cats';
import { AnimalType } from './models/EAnimalType';

async function displayCats() {
  try {
    const catsData: any = await Animals.getAnimals(AnimalType.CAT);

    const cats: any = catsData.map(
      (catData: { name: string; image_link: string; playfulness: number }) =>
        new Cat(catData.name, catData.image_link, catData.playfulness)
    );

    // Ahora `cats` es un array de instancias de `Cat`
    // Puedes hacer lo que necesites con este array, como mostrar los gatos en la UI
  } catch (error) {
    console.error(error);
  }
}

displayCats();
