const world = "world";

function hello(word: string = world): string {
  const mainEntry = document.getElementById("app");
  if (mainEntry) {
    mainEntry.innerHTML = "Hello world";
  }
  return `Hello ${word}! `;
}

hello();
