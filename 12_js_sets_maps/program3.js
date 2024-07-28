const countriesAPI = 'https://restcountries.com/v2/all';

// Function to get the most spoken languages
const mostSpokenLanguages = async (num) => {
  try {
    // Fetch data from API
    const response = await fetch(countriesAPI);
    const countries = await response.json();
    
    // Create a map to count languages
    const languageCount = new Map();

    countries.forEach(country => {
      const languages = country.languages;
      if (languages) {
        languages.forEach(language => {
          if (language.name) {
            languageCount.set(language.name, (languageCount.get(language.name) || 0) + 1);
          }
        });
      }
    });

    // Convert the map to an array of objects
    const sortedLanguages = Array.from(languageCount.entries())
      .map(([language, count]) => ({ [language]: count }))
      .sort((a, b) => Object.values(b)[0] - Object.values(a)[0]);

    // Return the top N languages
    return sortedLanguages.slice(0, num);
    
  } catch (error) {
    console.error('Error fetching countries data:', error);
    return [];
  }
};

// Example usage
mostSpokenLanguages(10).then(result => console.log(result));
mostSpokenLanguages(3).then(result => console.log(result));
