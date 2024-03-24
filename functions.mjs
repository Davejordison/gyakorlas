//function greet() {
  //  console.log("Chiao");
  //}

  //greet();


//Multiply
//let x = 10;
//function multiplyByTwo() {
  //return x * 2;
//}

//multiplyByTwo();
//console.log(multiplyByTwo());

//Arguments
//function multiply(x, y) {
//console.log(x * y);
//}

//multiply(3, 4);

//Greet with name
//function greet(name = "Anonymus") {
  //console.log(`Chiao, ${name}!`);
//}

//greet();
//greet("David");

/// Best Selling albums

import { 
  getAlbumWithFewestGenres,
  getAlbumWithMostOfGenres,
  getAlbumWithMostOfSale,
  getAlbumWithYearOf,
  getAlbumByArtist,
  getAlbumByGenre,
} from "./commands.mjs";

let bestSellingAlbums = [
  {
      artist: "Michael Jackson",
      title: "Thriller",
      year: 1982,
      genres: ["pop", "post-disco", "funk", "rock"],
      sale: 70000000,
  },
  {
      artist: "AC/DC",
      title: "Back in Black",
      year: 1980,
      genres: ["hard rock"],
      sale: 50000000,
  },
  {
      artist: "Whitney Houston",
      title: "The Bodyguard",
      year: 1992,
      genres: ["r&b", "soul", "pop", "soundtrack"],
      sale: 45000000,
  },
  {
      artist: "Pink Floyd",
      title: "The Dark Side of the Moon",
      year: 1973,
      genres: ["progressive rock"],
      sale: 45000000,
  },
  {
      artist: "Eagles",
      title: "Their Greatest Hits (1971 - 1975)",
      year: 1976,
      genres: ["country rock", "soft rock", "folk rock"],
      sale: 44000000,
  },
  {
      artist: "Eagles",
      title: "Hotel California",
      year: 1976,
      genres: ["soft rock"],
      sale: 42000000,
  },
  {
      artist: "Shania Twain",
      title: "Come On Over",
      year: 1997,
      genres: ["country", "pop"],
      sale: 40000000,
  },
  {
      artist: "Fleetwood Mac",
      title: "Rumours",
      year: 1977,
      genres: ["soft rock"],
      sale: 40000000,
  },
];


// get the command line command
const command = process.argv[2];

if (command === 'most-genre') {
  getAlbumWithMostOfGenres(bestSellingAlbums);
} else if (command === 'fewest-genre') {
  getAlbumWithFewestGenres(bestSellingAlbums);
} else if (command === 'most-sale') {
  getAlbumWithMostOfSale(bestSellingAlbums);
} else if (command === 'year') {
  const year = Number(process.argv[3]);
  getAlbumWithYearOf(bestSellingAlbums, year);
} else if (command === 'artist') {
  const artist = process.argv[3];
  getAlbumByArtist(bestSellingAlbums, artist);
} else if (command === 'genre') {
  const genre = process.argv[3];
  getAlbumByGenre(bestSellingAlbums, genre);
} else {
  console.log("I do not understand!", command);
}
//console.log(process.argv);

