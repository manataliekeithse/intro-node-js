import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name?", (name) => {
  console.log(`Hello, ${name}!`);

  rl.pause();

  setTimeout(() => {
    console.log("Resuming input");
    rl.resume();

    rl.question("How old are you? ", (age) => {
      console.log(`You are ${age} years old.`);

      rl.close();
    });
  }, 3000);
});
