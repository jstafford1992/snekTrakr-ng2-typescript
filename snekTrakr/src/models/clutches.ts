// interface for clutches from snekTrakr api

export interface clutches {
  id: number;
  snake_id: number;
  notes: string;
  date_layed: string;
  bad_eggs: number;
  number_hatched: number;
  user_id: number;
  name: string;
  sex: string;
  year_hatched: string;
  group: string;
  image_url: string;
}
