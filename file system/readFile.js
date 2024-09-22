//This is synchronous ES6 import

//import fs from "fs";
import fs from "fs/promises";
//import { promises as fs } from "fs";

async function readFileExample() {
  try {
    const data = await fs.readFile("greet.js", "utf8");
    console.log("File contents: ", data);
  } catch (error) {
    console.log(error);
  }
}

readFileExample();
