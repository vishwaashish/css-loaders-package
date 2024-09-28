import * as fs from "fs";
import * as path from "path";
import { LOADER } from "./constant";

const cssOutputPath = path.join(__dirname, "style.css");

const generateCss = () => {
  const cssContent = LOADER.map(loader => loader.css({ /* default props if necessary */ })).join("\n");


  fs.writeFile(cssOutputPath, cssContent, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log("All loader CSS has been written to style.css");
    }
  });
};

generateCss();
