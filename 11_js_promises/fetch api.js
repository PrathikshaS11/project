const url = 'https://restcountries.com/v2/all';

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Display the name and capital of each country
    data.forEach(country => {
      console.log(`Country: ${country.name}, Capital: ${country.capital}`);
    });
    
    // Example of filtering countries with a population greater than 100 million
    const largeCountries = data.filter(country => country.population > 100000000);
    console.log('Countries with population greater than 100 million:');
    largeCountries.forEach(country => console.log(country.name));
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
