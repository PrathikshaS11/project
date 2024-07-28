const catsAPI = 'https://api.thecatapi.com/v1/breeds';

const fetchCatNames = async () => {
  try {
    // Fetch data from the API
    const response = await fetch(catsAPI);
    
    // Check if the response is okay (status code in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON data
    const cats = await response.json();
    
    // Extract and print all cat names
    const catNames = cats.map(cat => cat.name);
    console.log(catNames);
    
  } catch (error) {
    // Handle any errors that occur during the fetch or parsing
    console.error('Error fetching cat names:', error);
  }
};

// Call the function to fetch and print cat names
fetchCatNames();
