const staticURL = "https://api.pexels.com/v1/search?";

const fetchData = (query) => {
  const dynamicURL = `${staticURL}query=${encodeURIComponent(query)}`;

  fetch(dynamicURL, {
    method: "GET",
    headers: { Authorization: "CkiwucNB2FLKOPLOSs3Gh3u0dE7HPaEvgDL3iOP2pfH3qmgOk6P8W797" },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Qualcosa è andato storto");
      }
    })

    .then((imgData) => {
      const myCardsContainer = document.getElementById("details-container");
      myCardsContainer.innerHTML = "";
      imgData.photos.forEach((img) => {
        const imgPreview = document.createElement("img");
        imgPreview.style = "width:100%; height:800px; object-fit: cover";
        imgPreview.src = img.src.original;

        const iDText = document.createElement("span");
        iDText.innerText = "ID:" + img.id;

        const auhtorText = document.createElement("span");
        auhtorText.innerText = "Author:" + img.photographer;

        const auhtorURLText = document.createElement("span");
        auhtorURLText.innerText = "Profile:" + img.photographer_url;

        const imgDescription = document.createElement("p");
        imgDescription.innerText = "Description:" + img.alt;
      });
    })
    .catch((err) => console.log(err));
};
