import fs from "fs/promises";

async function writeFileExample() {
  try {
    await fs.writeFile("example.txt", "Hello, World!", "utf8");
  } catch (error) {
    console.error(error);
  }
}

writeFileExample();
