export class Serie {
    num: number;
    name: string;
    channel: string;
    season: number;
    description: string;
    link: string;
    image: string;
  
    constructor(num: number, name: string, channel: string, season: number, description: string, link: string, image: string) {
      this.num = num;
      this.name = name;
      this.channel = channel;
      this.season = season;
      this.description = description;
      this.link = link;
      this.image = image;
    }
  }