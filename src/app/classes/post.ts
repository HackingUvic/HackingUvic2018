import { Coordinate } from './coordinate';
export class Post {

  constructor(
    id: number,
    handle: string,
    description: string,
    location: Coordinate,
    hashtags?: string[],
  ) { }
}
