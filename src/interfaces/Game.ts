import { ESRB } from "./ESRB";
import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publishers";

// Interface describing game info
export interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  released: string;
  metacritic: number;
  genres: Genre[];
  publishers: Publisher[];
  esrb_rating: ESRB;
  parent_platforms: { platform: Platform }[];
}
