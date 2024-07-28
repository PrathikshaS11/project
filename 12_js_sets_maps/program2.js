const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

// Convert arrays to sets
const setA = new Set(a);
const setB = new Set(b);

// Union
const union = new Set([...setA, ...setB]);
console.log('Union:', [...union]);

// Intersection
const intersection = new Set([...setA].filter(item => setB.has(item)));
console.log('Intersection:', [...intersection]);

// Difference (A - B)
const difference = new Set([...setA].filter(item => !setB.has(item)));
console.log('Difference (A - B):', [...difference]);
