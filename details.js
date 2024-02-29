const staticURL = "https://api.pexels.com/v1/photos/";

const imgIdfromAddr = new URLSearchParams(new URL(window.location.href).search).get("id");

fetch(staticURL + imgIdfromAddr, {
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
    console.log(imgData);
    const myDetailsContainer = document.getElementById("details-container");
    myDetailsContainer.innerHTML = "";

    const imgPreview = document.createElement("img");
    imgPreview.style = "width:100%; height:500px; object-fit: cover";
    imgPreview.src = imgData.src.large;

    const iDText = document.createElement("span");
    iDText.innerText = "ID:" + imgData.id;
    iDText.style = "display:block; font-weight: bold";

    const auhtorText = document.createElement("span");
    auhtorText.innerText = "Author: " + imgData.photographer;
    auhtorText.style = "display:block; font-weight: bold";

    const auhtorURLText = document.createElement("span");
    auhtorURLText.innerText = "Profile: " + imgData.photographer_url;
    auhtorURLText.style = "display:block; font-weight: bold";

    const imgDescription = document.createElement("p");
    imgDescription.innerText = "Description: " + imgData.alt;
    imgDescription.style = "display:block; font-weight: bold";

    myDetailsContainer.appendChild(imgPreview);
    myDetailsContainer.appendChild(iDText);
    myDetailsContainer.appendChild(auhtorText);
    myDetailsContainer.appendChild(auhtorURLText);
    myDetailsContainer.appendChild(imgDescription);
  })
  .catch((err) => console.log(err));
