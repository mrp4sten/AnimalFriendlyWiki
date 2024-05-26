import { AnimalType } from "../models/EAnimalType";

export class Animals {
  private static baseUrl: string = process.env.API_URL ?? "";
  private static apiKey: string = process.env.API_KEY ?? "";

  static async getAnimals(type: AnimalType.CAT | AnimalType.DOG) {
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

      const data = await response.json();

      console.log('response :>> ', data);

      return data;
    } catch (error) {
      console.error(error);
    }
  }
}