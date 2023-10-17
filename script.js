var programmingLanguages = [
  "Scala",
  "Java",
  "Go",
  "Swift",
  "Cobol",
  "JavaScript",
  "Python",
  "Ruby",
  "Elm",
  "Rust",
  "C#"
];

// Log out the array
console.log(programmingLanguages);

for (var language of programmingLanguages) {
  console.log(`I want to learn ${language}!`);
}

// use forEach for array, make all items upper case
// log out index starting at '1' with the uppercase element
// i.e.: 1. JAVASCRIPT
programmingLanguages.forEach(function (item, index) {
  console.log(`${index + 1}. ${item.toUpperCase()}`);
});

// User .filter() to return a new array called updatedLangages that
// returns languages without the letter "y"
var updatedLanguages = programmingLanguages.filter(function (language) {
  return language.includes("y");
});

console.log(updatedLanguages);
