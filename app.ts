const person = {
  name: 'Emily',
  age: 39,
  hobbies: ['sports', 'cooking'],
  role: [2, 'author'],
};

let favoriteActivities: string[];
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
