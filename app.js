var person = {
    name: 'Emily',
    age: 39,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author']
};
var favoriteActivities;
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
