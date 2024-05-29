import { Animals } from './controller/Animals';
import { Cat } from './models/Cats';
import { Dog } from './models/Dogs';
import { AnimalType } from './models/EAnimalType';

async function displayCats() {
  try {
    const catsData: Array<Cat> | undefined = await Animals.getAnimals(AnimalType.CAT);
    const listRow: HTMLElement = document.getElementById('list_row') as HTMLElement;

    if (catsData) {
      const cardElement: string[] = catsData.map((cat: Cat) => {
        const playfulnessPercentage = cat.playfulness && cat.playfulness ? (cat.playfulness / 5) * 100 : 0;

        return `
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img src="${cat.image_link}"
              class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${cat.name}</h5>
              <ol class="list-group list-group-numbered">
                <li class="list-group-item">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: ${playfulnessPercentage}%;" aria-valuenow="${playfulnessPercentage}" aria-valuemin="0"
                      aria-valuemax="100">${playfulnessPercentage}%</div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
        `;
      })

      listRow.innerHTML = cardElement.join('');
    }


  } catch (error) {
    console.error(error);
  }
}

async function displayDogs() {
  try {
    const dogsData: Array<Dog> | undefined = await Animals.getAnimals(AnimalType.DOG);
    const listRow: HTMLElement = document.getElementById('list_row') as HTMLElement;

    if (dogsData) {
      const cardElement: string[] = dogsData.map((dog: Dog) => {
        const playfulnessPercentage = dog.playfulness && dog.playfulness ? (dog.playfulness / 5) * 100 : 0;

        return `
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img src="${dog.image_link}"
              class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${dog.name}</h5>
              <ol class="list-group list-group-numbered">
                <li class="list-group-item">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: ${playfulnessPercentage}%;" aria-valuenow="${playfulnessPercentage}" aria-valuemin="0"
                      aria-valuemax="100">${playfulnessPercentage}%</div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
        `;
      })

      listRow.innerHTML = cardElement.join('');
    }


  } catch (error) {
    console.error(error);
  }
}

document.getElementById('displayCats')?.addEventListener('click', displayCats);
document.getElementById('displayDogs')?.addEventListener('click', displayDogs);
