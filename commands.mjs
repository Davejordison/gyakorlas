function getMAx(arr, compare) {
  let max = arr[0];
  let i = 1;

  while (i < arr.length) {
    if (compare(arr[i], max > 1)) {
      max = arr[i];
    }

    i++;
  }
  return max;
}

function getMin(arr, compare) {
  let min = arr[0];
  let i = 1;

  while (i < arr.length) {
    if (compare(arr[i], min < 1)) {
      min = arr[i];
    }

    i++;
  }
  return min;
}

function compareByGenres(album1, album2) {
  let n1 = album1.genres.length
  let n2 = album2.genres.length
  if (n1 > n2) {
    return 1;
  } else if (n2 > n1) {
    return -1;
  } 
return 0;
}

function compareBySale(a1, a2) {
  return a1.sale - a2.sale;
}

export function getAlbumWithMostOfGenres(albums) {
    //let mostOfGenres = albums[0];
    //for (let i = 0; i < albums.length; i++) {
    //if (albums[i].genres.length > mostOfGenres.genres.length) {
    //  mostOfGenres = albums[i];
    //}
  //}
  //  console.log("The most of genres", mostOfGenres.title);
  const mostOfGenres = getMAx(albums, compareByGenres);
  }
  
  
export function getAlbumWithMostOfSale(albums) {
    const mostOfSale = getMAx(albums, compareBySale);
    //for (let i = 0; i < albums.length; i++) {
    //if (albums[i].sale.length > mostOfSale.sale.length) {
    //  mostOfSale = albums[i];
    //}
  }
    console.log("The most of sale", mostOfSale.title);
  //}
  
  
export function getAlbumWithFewestGenres(albums) {
    let minOfGenres = getMin(albums, compareByGenres);
    //for (let i = 0; i < albums.length; i++) {
    //if (albums[i].genres.length < minOfGenres.genres.length) {
    //  minOfGenres = albums[i];
    //}
  }
    console.log("The fewest of genres", minOfGenres.title);
  //}

export function getAlbumWithYearOf(albums, year) {
    for (let i = 0; i < albums.length; i++) {
        if (albums[i].year === year) {
            console.log("By Year", albums[i].title);
            break; // exit the ForLoop
        }
    }
}

export function getAlbumByArtist(albums, artist) {
  for (let i = 0; i < albums.length; i++) {
    if (albums[i].artist === artist) {
      console.log("By artist", albums[i].artist);
    }
  }
}

export function getAlbumByGenre(albums, genre) {
  for (let i = 0; i < albums.length; i++) {
    for (let j = 0; i < albums[i].genres.length; j++) {
        if (albums[i].genres[j] === genre) {
          console.log("By genre", albums[i].title);
          return;
        }
       }
    }
  }

//callback
function foo(fn) {
  fn();
}

function bar() {

}

foo(fn = bar); 