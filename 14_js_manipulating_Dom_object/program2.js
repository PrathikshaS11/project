// Example array of countries
const countries = [
    'United States',
    'Canada',
    'United Kingdom',
    'Germany',
    'France',
    'Italy',
    'Spain',
    'Australia',
    'Japan',
    'China',
    // Add more countries as needed
  ];
  
  function displayCountries() {
    const container = document.getElementById('countries-container');
  
    countries.forEach(country => {
      const countryDiv = document.createElement('div');
      countryDiv.className = 'country';
      countryDiv.textContent = country;
      container.appendChild(countryDiv);
    });
  }
  
  // Initialize the display
  displayCountries();
  