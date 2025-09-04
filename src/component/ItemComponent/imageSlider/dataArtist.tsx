interface ArtistsDetail {
    id: number | string;
    src: string;
    name: string;
    description: string;
  }
  
  export const ARTISTS_DETAIL: ArtistsDetail[] = [
    {
      id: 0,
      src: require("src/assets/images/imgSlider.png"),
      name: 'Billie Eilish',
      description: 'You can have easy access to every song of Billie Eilish by just clicking on the Listen now button. You can also follow her for supporting her and keeping up with what she does.',
    },
    {
      id: 1,
      src: require("src/assets/images/singer/taylor_swift.jpg"),
      name: 'Ariana Grande',
      description: 'Enjoy all the hits by Ariana Grande! Click on the Listen now button to start, and don’t forget to follow her for more updates.',
    },
    {
      id: 2,
      src: require("src/assets/images/imgSlider.png"),
      name: 'The Weeknd',
      description: 'Dive into the music of The Weeknd by clicking on the Listen now button. Follow him to stay updated with his latest releases.',
    },
    {
      id: 3,
      src: require("src/assets/images/imgSlider.png"),
      name: 'Taylor Swift',
      description: 'Listen to the latest tracks from Taylor Swift by clicking the Listen now button. Follow her to stay in touch with all her latest news and music.',
    },
    {
      id: 4,
      src: require("src/assets/images/imgSlider.png"),
      name: 'Drake',
      description: 'Get access to every track by Drake with a single click on the Listen now button. Don’t forget to follow him for all the latest news.',
    },
    {
      id: 5,
      src: require("src/assets/images/imgSlider.png"),
      name: 'Ed Sheeran',
      description: 'Listen to Ed Sheeran’s top tracks by hitting the Listen now button. Follow him for more updates on his music and tours.',
    },
  ];
  