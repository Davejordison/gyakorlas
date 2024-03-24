let favBooks = [
    {
      title: "The Hobbit",
      author: "J. R. R. Tolkien",
      isNewerThan2000: false,
      year: 1937,
      characters: [
        "Bilbo Baggins",
        "Gandalf",
        "Thorin Oakensield",
        "Balin",
      ],
      review:
        "Short chapters and wonderful characters make The Hobbit a real page-turner. It is by turns funny and scary. An awsome book!",
    },

    {
      title: "King Rat",
      author: "James Clavell",
      isNewerThan2000: false,
      year: 1994,
      characters: ["Gray", "Marlowe", "Smedley-Taylor", "Larkin"],
      review:
        "The time is World War II. The place is a brutal prison camp deep in Japanese-occupied territory. One man, an American corporal, seeks dominance over both captives and captors alike.",
    }

];

let favMovies = [
	{
	title: "Man on Fire",
    year: 2004,
    rating: 7.7,
    description: "In Mexico City, a former CIA operative swears vengeance on those who committed an unspeakable act against the family he was hired to protect.",
	directors: ["Tony Scott"],
	writers: ["A.J. Quinnell", "Brian Helgeland"],
	stars: ["Denzel Washington", "Christopher Walken"],
	genres: ["action", "crime", "drama"]

	},
	{
	title: "Django Unchained",
    year: 2012,
    rating: 8.5,
    description: "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation owner in Mississippi.",
	directors: ["Quentin Tarantino"],
	writers: ["Quentin Tarantion"],
	stars: ["Jamie Foxx", "Christoph Walz", "Sam L. Jackson"],
	genres: ["drama", "western"]
	},
	{
	title: "Once upon a time in America",
    year: 1984,
    rating: 8.3,
    description: "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan 35 years later, where he must once again confront the ghosts and regrets of his old life.",
	directors: ["Sergio Leone"],
	writers: ["Harry Gray", "Leonardo Benvenuti"],
	stars: ["Robert De Niro", "James Woods"],
	genres: ["drama", "crime"]
	},
	{
	title: "Goodfellas",
    year: 1990,
    rating: 8.7,
    description: "The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito.",
	directors: ["Martin Scorsese"],
	writers: ["Nicholas Pileggi", "Martin Scorsese"],
	stars: ["Robert De Niro", "Ray Liotta"],
	genres: ["drama", "crime"]
	}
];

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

let ourTeam = {
  name: "Prestige Coders",

  members: [
    {
      name: "Imre",
      birthday: {
        year: 1996,
        mounth: 5,
        day: 30,
      },
      location: {
        country: "Northern Ireland",
        city: "Belfast",
      },
      codingLevel: {
        level: 20,
        senority: "junior",
      },
      colors: {
        primary: {
          red: 204,
          green: 230,
          blue: 255,
        },
        secondary: {
          red: 179,
          green: 0,
          blue: 0,
        },
      },
      favorites: {
        favMovies: [
          {
            title: "Transporter",
            year: 2002,
            rating: 6.8,
            review:
              "I still rate this pretty high even if the last 10 minutes got totally out of hand and went crazy, action-wise. By out-of-hand, I mainly refer to the usual excessive action and bad guys-keep-missing-good guys-even-from-short range-type mentality. Actually, a lot of the film is that but it's such a fun movie that I didn't care.",
          },
          {
            title: "Taxi",
            year: 1998,
            rating: 7.0,
            review:
              "This is what movies should be like. It is an extremely well made film, It really has great script, which Luc Besson mastered and made this action comedy movie, just a fun to watch.",
          },
          {
            title: "Ride along",
            year: 2014,
            rating: 6.1,
            review:
              "Good fun film with some good action and a decent story which was pretty original. The partnership between Ice cube and Kevin hart was also great.",
          },
          {
            title: "American Pie",
            year: 1999,
            rating: 7.0,
            review:
              "American Pie has all the ingredients of a good movie. First, the plot deals with young people in search of their first sexual experience. What could be more basic to the human condition?",
          },
        ],
        favBooks: [
          {
            title: "Az ember tragédiája",
            author: "Madách Imre",
            year: 1883,
            characters: ["Adám", "Éva", "Lucifer", "Péter apostol"],
            review:
              "Perhaps the greatest poem ever written. Steep in theology, history and philosophy, this beautiful poem is my first book by an Hungarian author. ",
          },
          {
            title: "A gyilkos ismeretlen",
            author: "Keigo Higashino",
            year: 2005,
            characters: ["Jaszukó", "A matematikus", "A fizikus", "A nyomozó"],
            review:
              "I didn't know Keigo Higashino until now. That was a mistake. He writes very well. His novel published in Hungarian is a true professional work.",
          },
        ],
      },
    },
    {
      name: "David",
      birthday: {
        year: 1987,
        mounth: 8,
        day: 19,
      },
      location: {
        country: "Hungary",
        city: "Körmend",
      },
      codingLevel: {
        level: 10,
        senority: "junior",
      },
      colors: {
        primary: {
          red: 52,
          green: 73,
          blue: 235,
        },
        secondary: {
          red: 52,
          green: 235,
          blue: 58,
        },
      },
      favorites: {
        favMovies: [
          {
            title: "Armageddon",
            year: 1994,
            rating: 6.7,
            review:
              "Incredibly unrealistic, but still a show after 16 years. Excellent example of Hollywood entertainment, Shut your brain off and enjoy the show.",
          },
          {
            title: "The Rock",
            year: 1996,
            rating: 7.4,
            review:
              "This action movie brings you back to the 90s. A high quality thriller with great performances. One of the most impressive Michael Bay movies.",
          },
          {
            title: "Aliens",
            year: 1986,
            rating: 8.4,
            review:
              "Definitely a masterpiece in in sci-fi and action genres. Getting better every time you watch it. Dont forget: in space no one can hear you scream.",
          },
        ],
        favBooks: [
          {
            title: "The Hobbit",
            author: "J. R. R. Tolkien",
            year: 1937,
            characters: [
              "Bilbo Baggins",
              "Gandalf",
              "Thorin Oakensield",
              "Balin",
            ],
            review:
              "Short chapters and wonderful characters make The Hobbit a real page-turner. It is by turns funny and scary. An awsome book!",
          },
          {
            title: "King Rat",
            author: "James Clavell",
            year: 1994,
            characters: ["Gray", "Marlowe", "Smedley-Taylor", "Larkin"],
            review:
              "The time is World War II. The place is a brutal prison camp deep in Japanese-occupied territory. One man, an American corporal, seeks dominance over both captives and captors alike.",
          },
        ],
      },
    },
    {
      name: "Árpi",
      birthday: {
        year: 1990,
        mounth: 6,
        day: 3,
      },
      location: {
        country: "Hungary",
        city: "Debrecen",
      },
      codingLevel: {
        level: 40,
        senority: "junior",
      },
      colors: {
        primary: {
          red: 255,
          green: 165,
          blue: 112,
        },
        secondary: {
          red: 29,
          green: 109,
          blue: 145,
        },
      },
      favorites: {
        favMovies: [
          {
            title: "Bullet Train",
            year: 2022,
            rating: 7.3,
            review:
              'With solid performances from the cast and sleek direction, "The Bullet Train" is a thrilling ride worth watching.',
          },
          {
            title: "Wasabi",
            year: 2001,
            rating: 6.6,
            review:
              "The film is filled with martial arts sequences, comedic moments, and a touch of romance. Reno's character is both.",
          },
          {
            title: "Coming to America",
            year: 1988,
            rating: 7.1,
            review:
              'The storyline is simple yet entertaining, and the cast delivers excellent performances, making it a must-watch for anyone looking for a good laugh. Overall, "Coming to America" is a feel-good movie that never fails to entertain.',
          },
          {
            title: "Free Guy",
            year: 2021,
            rating: 7.1,
            review:
              'The film\'s blend of humor, heart, and impressive visual effects make it an enjoyable watch for both gamers and non-gamers alike. With its entertaining storyline and likable characters, "Free Guy" is definitely worth checking out for a fun and uplifting cinematic experience.',
          },
        ],
        favBooks: [
          {
            title: "Egri csillagok",
            author: "Gárdonyi Géza",
            year: 1899,
            characters: ["Old Shatterhand", "Winnetou", "Charlie", "Old Death"],
            review:
              'The book follows the lives of the inhabitants of Eger, their struggles, sacrifices, and ultimately their triumph against overwhelming odds. Gárdonyi\'s vivid portrayal of characters and events, coupled with his engaging storytelling, make "Egri Csillagok" a timeless masterpiece that captures the spirit of heroism and resilience.',
          },
          {
            title: "Winnetou",
            author: "Karl May",
            year: 1893,
            characters: ["Old Shatterhand", "Winnetou", "Charlie", "Old Death"],
            review:
              "I love this book's storytelling and the wild west set. The story follows the friendship between the Apache chief Winnetou and the German engineer Old Shatterhand as they navigate through various challenges and adventures.",
          },
        ],
      },
    },
  ],
};