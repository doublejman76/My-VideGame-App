export class Game {
  constructor(
    public title: string,
    public company: string,
    public price: number,
    public genre: string,
    public coverImagePath?: string,
    public yearCreated?: number,

  ) {}
}
