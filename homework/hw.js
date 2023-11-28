const seriesDB = {
  count: 0,
  series: {},
  actors: {},
  genres: [],
  private: false,
  start: function () {
    seriesDB.count = +prompt("How many series did you watch?", "");
    while (
        seriesDB.count === "" ||
        seriesDB.count == null ||
        isNaN(seriesDB.count)
        ) {
      seriesDB.count = +prompt("How many series did you watch?", "");
    }
  },
  rememberMySeries: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Which latest series did you watch?");
      const b = prompt("How do you estimate?");
      if (a !== "" && b !== "" && a != null && b != null) {
        seriesDB.series[a] = b;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectLevelSeries: function () {
    if (seriesDB.count < 5) {
      console.log("Kam serial ko'ribsiz");
    } else if (seriesDB.count > 5 && seriesDB.count < 10) {
      console.log("Siz klassik tomoshabin ekansiz");
    } else {
      console.log("Siz serialchi zvezda ekansiz");
    }
  },
  showDB: function () {
    if (seriesDB.private) {
      console.log(seriesDB);
    } else {
      console.log("");
    }
  },
  writeGenres: function () {
    // for (let i = 0; i < 3; i++) {
    //   let genre = prompt(`Yaxshi ko'rgan janringiz ${i + 1}`, "");
    //   if (genre === "" || genre === null) {
    //     console.log("Siz noto'g'ri ma'lumot kiritdingiz");
    //     i--;
    //   } else {
    //     seriesDB.genres[i] = genre;
    //   }
    // }
    let genres = prompt("Yaxshi ko'rgan janringizni vergul yordamida kiriting", "").toLowerCase();
    if (genres === "" || genres === null) {
      console.log("Siz noto'g'ri ma'lumot kiritdingiz");
    } else {
      seriesDB.genres = genres.split(", ");
      seriesDB.genres.sort();
    }
    seriesDB.genres.forEach((item, index) => {
      console.log(`Siz yaxshi ko'rgan janringiz ${index + 1} - nomi ${item}`);
    })
  },
  visibleDB: function () {
    if (seriesDB.private) {
      seriesDB.private = false;
    } else {
      seriesDB.private = true;
    }
  },
};

seriesDB.start();