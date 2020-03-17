const fs = require("fs");
const path = require("path");
const axios = require("axios").default;
const ProgressBar = require("progress");

async function download() {
  if (!fs.existsSync(path.resolve(__dirname, "files", "nameOfFile.pkg"))) {
    const url =
      "https://nopaystation.com/view/PSP/NPUH90048/CD00000000000000/0/pkg?version=1";

    console.log("Connecting …");
    const { data, headers } = await axios({
      url,
      method: "GET",
      responseType: "stream"
    });
    const totalLength = headers["content-length"];

    console.log("Starting download");
    const progressBar = new ProgressBar(
      "-> downloading [:bar] :percent :etas",
      {
        width: 40,
        complete: "=",
        incomplete: " ",
        renderThrottle: 1,
        total: parseInt(totalLength)
      }
    );

    const writer = fs.createWriteStream(path.resolve(__dirname, "files"));

    data.on("data", chunk => progressBar.tick(chunk.length));
    data.pipe(writer);
  } else {
    console.log("File already in directory");
  }
}

download();
