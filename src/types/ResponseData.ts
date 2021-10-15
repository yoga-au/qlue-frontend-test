type Result = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: any[];
  species: any[];
  vehicles: any[];
  starships: any[];
  created: string;
  edited: string;
  url: string;
};

export type ResponseData = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Result[];
};
