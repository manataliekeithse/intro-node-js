import fs from "fs/promises";

async function appendFileExample() {
  try {
    await fs.appendFile("example.txt", "\nAppended text", "utf8");
  } catch (error) {
    console.error(error);
  }
}

appendFileExample();
