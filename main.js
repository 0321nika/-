let dictionary = {
    "apple": "A fruit that is round and typically red, green, or yellow.",
    "banana": "A long, curved fruit with a yellow or green skin.",
    "cherry": "A small, round fruit that is typically bright or dark red.",
    "grape": "A small, juicy fruit that is typically green or purple."
  };
  
  let searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', function() {
    let query = searchInput.value.trim().toLowerCase();
    filterDictionary(query);
  });
  
  function displayDictionary() {
    let dictionaryElement = document.getElementById('dictionary');
    dictionaryElement.style.display = "none"; // Show the dictionary element
    dictionaryElement.innerHTML = ''; // Clear previous results
    for (let key in dictionary) {
      let definition = dictionary[key];
      let listItem = document.createElement('li');
      listItem.innerHTML = `<strong>${key}:</strong> ${definition}`;
      dictionaryElement.appendChild(listItem);
    }
  }
  
  function filterDictionary(query) {
    let dictionaryElement = document.getElementById('dictionary');
    if (!query) {
      dictionaryElement.style.display = "none"; // Hide the dictionary element
    } else {
      dictionaryElement.style.display = "block"; // Show the dictionary element
      dictionaryElement.innerHTML = ''; // Clear previous results
      for (let key in dictionary) {
        if (key.toLowerCase().indexOf(query) !== -1) {
          let definition = dictionary[key];
          let listItem = document.createElement('li');
          listItem.innerHTML = `<strong>${key}:</strong> ${definition}`;
          dictionaryElement.appendChild(listItem);
        }
      }
    }
  }
  
  displayDictionary();