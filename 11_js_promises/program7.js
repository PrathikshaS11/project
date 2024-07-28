const catsAPI = 'https://api.thecatapi.com/v1/breeds';

const fetchAverageCatWeight = async () => {
  try {
    const response = await fetch(catsAPI);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const cats = await response.json();
    const weightsInKg = cats.map(cat => {
      const weight = cat.weight.metric.split('-');
      const minWeight = parseFloat(weight[0]);
      const maxWeight = weight[1] ? parseFloat(weight[1]) : minWeight;
      return (minWeight + maxWeight) / 2;
    }).filter(weight => !isNaN(weight));

    const averageWeight = weightsInKg.reduce((a, b) => a + b, 0) / weightsInKg.length;
    console.log(`Average weight of cats (kg): ${averageWeight.toFixed(2)}`);

  } catch (error) {
    console.error('Error fetching cat weights:', error);
  }
};

fetchAverageCatWeight();
