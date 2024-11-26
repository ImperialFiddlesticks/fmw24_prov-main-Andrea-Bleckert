// 6. Hämta och visa foton. (3p)
// Ladda ner foton med fetch från denna url: https://jsonplaceholder.typicode.com/photos
// Visa dom första 10 fotona på sidan.
// När man klickar på ett foto ska dess titel visas i en popup med `alert`
const photosEl = document.getElementById("photos");

async function getPhotos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await response.json();

  for (let i = 0; i < 10; i++) {
    const photo = document.createElement("img");
    photo.src = data[i].url;
    photo.style.width = "200px";
    photosEl.appendChild(photo);

    photo.addEventListener("click", (e) => {
      alert(`${data[i].title}`);
    });
  }
}
getPhotos();
