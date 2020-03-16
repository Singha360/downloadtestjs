const fs = require("fs");
const path = require("path");
const axios = require("axios").default;

async function download() {
  const url = "";
  const filepath = path.resolve(__dirname, "files", "nameOfFile.pkg"); //"nameOfFile.pkg" will change with the approriate name

  const response = await axios({
    method: "GET",
    url: url,
    responseType: "stream"
  });

  console.log(
    fs.existsSync(path.resolve(__dirname, "files", "nameOfFile.pkg"))
  );

  // response.data.pipe(fs.createWriteStream(filepath));

  // return new Promise((resolve, reject) => {
  //   response.data.on("end", () => {
  //     resolve();
  //   });

  //   response.data.on("error", (err) => {
  //     reject(err);
  //   });
  // });
}

download();
