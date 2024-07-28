// 1. Create an empty set
const emptySet = new Set();
console.log('Empty Set:', emptySet);

// 2. Create a set containing 0 to 10 using loop
const setRange = new Set();
for (let i = 0; i <= 10; i++) {
  setRange.add(i);
}
console.log('Set with range 0 to 10:', setRange);

// 3. Remove an element from the set
setRange.delete(5);
console.log('After removing 5:', setRange);

// 4. Clear the set
setRange.clear();
console.log('After clearing the set:', setRange);

// 5. Create a set of 5 string elements from array
const stringArray = ['apple', 'banana', 'cherry', 'apple', 'banana'];
const stringSet = new Set(stringArray);
console.log('Set from array:', stringSet);

// 6. Create a map of countries and number of characters of a country
const countries = ['Finland', 'Sweden', 'Norway'];
const countriesMap = new Map();

countries.forEach(country => {
  countriesMap.set(country, country.length);
});

console.log('Countries Map:', countriesMap);
