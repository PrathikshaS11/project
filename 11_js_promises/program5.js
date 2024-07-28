const countriesAPI = 'https://restcountries.com/v2/all';

const fetchCountries = async () => {
  try {
    // Fetch data from the API
    const response = await fetch(countriesAPI);
    
    // Check if the response is okay (status code in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON data
    const countries = await response.json();
    
    // Iterate through each country and print the required information
    countries.forEach(country => {
      console.log('Country:', country.name);
      console.log('Capital:', country.capital);
      console.log('Languages:', country.languages.map(lang => lang.name).join(', '));
      console.log('Population:', country.population);
      console.log('Area:', country.area);
      console.log('---'); // Separator between countries
    });
  } catch (error) {
    // Handle any errors that occur during the fetch or parsing
    console.error('Error fetching countries data:', error);
  }
};

// Call the function to fetch and print the countries data
fetchCountries();
