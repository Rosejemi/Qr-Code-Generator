import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{
    message: "Type in your URL",
    name: "url"   // lowercase
  }])
  .then((answers) => {
    const url = answers.url; // use lowercase 'url'
    
    // Create QR code image
    const qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
    
    // Save URL to a text file
    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The File has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in this environment");
    } else {
      console.log("Something went wrong:", error);
    }
  });
