function fetchShibes() {
  const apiUrl = 'https://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true';

  return fetch(apiUrl)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .catch(error => {
          console.error('Error fetching shibes:', error);
          throw error;
      });
}

function createImageElement(src) {
  const img = document.createElement('img');
  img.src = src;
  img.alt = 'Shibe Image';
  img.classList.add('img-thumbnail', 'm-2');
  return img;
}

function displayShibes(images) {
  const imageGallery = document.getElementById('imageGallery');
  images.forEach(src => {
      const img = createImageElement(src);
      imageGallery.appendChild(img);
  });
}

function init() {
  fetchShibes()
      .then(images => {
          displayShibes(images);
      })
      .catch(error => {
          // Handle errors here if necessary
      });
}

init();
