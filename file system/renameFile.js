import fs from "fs/promises";

async function renameFileExample() {
  try {
    await fs.rename("example.txt", "renamedExample.txt");
    console.log("File renamed successfully!");
  } catch (error) {
    console.error("Error renaming file:", error);
  }
}

renameFileExample();
