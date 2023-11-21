const showDB = () => {
  if (seriesDB.private === false) {
    console.log(seriesDB);
  } else {
    console.log("");
  }
}

showDB();