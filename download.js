const tsv = require("tsv");
const path = require("path");
const fs = require("fs");

fs.readFile(path.resolve(__dirname, "PSV_GAMES.tsv"), "utf8", (err, data) => {
  dataArr = tsv.parse(data)[].Name;
  // dataArr.forEach(gameInfo => {
  //   console.log(gameInfo["PKG direct link"]);
  // });
  console.log(dataArr);
});
