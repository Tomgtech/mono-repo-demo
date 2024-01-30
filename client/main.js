const container = document.getElementById("app");

// async function for fetch images
async function fetchImages() {
  let data = await fetch(`${import.meta.env.VITE_ServerURL}images`);

  let result = await data.json();
  return result;
}

async function makeImages() {
  let images = fetchImages();
  images.forEach((image) => {
    let imgTag = document.createElement("img");
    imgTag.src = image.image;
    container.appendChild(imgTag);
  });
}

makeImages();
