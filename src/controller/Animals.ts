import { Cat } from "../models/Cats";
import { AnimalType } from "../models/EAnimalType";

export class Animals {
  private static baseUrl: string = process.env.API_URL ?? "";
  private static apiKey: string = process.env.API_KEY ?? "";

  static async getAnimals(type: AnimalType.CAT | AnimalType.DOG): Promise<Array<Cat> | undefined> {
    const params = new URLSearchParams();
    if (type === AnimalType.CAT) {
      params.append('family_friendly', '5');
    } else if (type === AnimalType.DOG) {
      params.append('protectiveness', '5');
    }

    try {
      const response: Response = await fetch(`${this.baseUrl}/${type}?${params.toString()}`, {
        headers: {
          'X-Api-Key': `${this.apiKey}`,
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }
}