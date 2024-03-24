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
  ]

// get youngest album
let youngestAlbum = 0;
for (let i = 0; i < bestSellingAlbums.length; i++) {
    let sumYear = bestSellingAlbums[i].year;
        //console.log(sumYear);
    if (sumYear > bestSellingAlbums[0].year) {
        youngestAlbum = bestSellingAlbums[i].title;
        //youngestAlbum = bestSellingAlbums[i].title;
    }
}          // console.log(youngestAlbum);


// get the oldest album
let oldsetAlbum = 0;
for (let i = 0; i < bestSellingAlbums.length; i++) {
    let sumYear = bestSellingAlbums[i].year;
    if (sumYear < bestSellingAlbums[0].year) {
        oldsetAlbum = bestSellingAlbums[i].title;
    }

    }    //console.log(oldsetAlbum);


    function simpleFunction() {
        let thisText = "Szevasztok";
       // console.log(thisText);
    }
    function simpleFunction2() {
        simpleFunction();
    }
    simpleFunction2();


function foo(fn) {
        fn();

function bar() {

}
}

//foo(fn = bar);


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers.length; i++) {
    //console.log(numbers[i]);
    if (numbers[i] / 3 === 1) {
        numbers = multiply;
        console.log(number);
    }
}
