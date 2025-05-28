// console.log("aasass");

// fetch("test.md")
//   .then((response) => response.text())
//   .then((data) => {
//     console.log(data);
//   });

async function getFile(path) {
  try {
    const response = await fetch(path);
    console.log(await response.text());
  } catch (error) {
    console.log(error);
  }
}

addEventListener("DOMContentLoaded", () => main());

function main() {
  getFile("test.md");
}
