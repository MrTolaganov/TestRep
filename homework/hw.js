let numberOfSeries;

function startApp() {
  numberOfSeries = +prompt("How many series did you watch?", "");

  while (
    numberOfSeries == "" ||
    numberOfSeries == null ||
    isNaN(numberOfSeries)
  ) {
    numberOfSeries = +prompt("How many series did you watch?", "");
  }
}

startApp();

const seriesDB = {
  coumt: numberOfSeries,
  series: {},
  actors: {},
  genres: [],
  private: false,
};

const rememberMySeries = function () {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Which latest series did you watch?");
    const b = prompt("How do you estimate?");

    if (a != "" && b != "" && a != null && b != null) {
      seriesDB.series[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
};

// rememberMySeries();

const detectLevelSeries = () => {
  if (numberOfSeries < 5) {
    console.log("Kam serial ko'ribsiz");
  } else if (numberOfSeries > 5 && numberOfSeries < 10) {
    console.log("Siz klassik tomoshabin ekansiz");
  } else {
    console.log("Siz serialchi zvezda ekansiz");
  }
};

// detectLevelSeries();

const showDB = (hidden) => {
  if (! hidden) {
    console.log(seriesDB);
  } else {
    console.log("");
  }
}

showDB(seriesDB.private);

const writeGenres = () => {
  for (let i = 0; i < 3; i++) {
    let genre = prompt("Yaxshi ko'rgan janringiz", "");
    console.log(genre);
    seriesDB.genres[i] = genre;
  }
}

// writeGenres();
// console.log(seriesDB.genres);