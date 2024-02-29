// La mia chiave API Pexels: CkiwucNB2FLKOPLOSs3Gh3u0dE7HPaEvgDL3iOP2pfH3qmgOk6P8W797
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
      const myCardsContainer = document.getElementById("cards-container");
      myCardsContainer.innerHTML = "";
      imgData.photos.forEach((data) => {
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-md-4");

        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card", "mb-4", "shadow-sm");

        const cardImg = document.createElement("img");
        cardImg.classList.add("bd-placeholder-img", "card-img-top");
        cardImg.style = "width:100%; height:500px; object-fit: cover";
        cardImg.src = data.src.portrait;

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.innerText = data.photographer;

        const cardDescription = document.createElement("p");
        cardDescription.classList.add("card-text");
        cardDescription.style = "min-height: 70px";
        cardDescription.innerText = data.alt;

        const btnDiv = document.createElement("div");
        btnDiv.classList.add("d-flex", "justify-content-between", "align-items-center");

        const viewBtn = document.createElement("button");
        viewBtn.classList.add("btn", "btn-sm", "btn-outline-secondary");
        viewBtn.innerText = "View";
        viewBtn.type = "button";

        const hideBtn = document.createElement("button");
        hideBtn.classList.add("btn", "btn-sm", "btn-outline-secondary", "me-auto");
        hideBtn.innerText = "Hide";
        hideBtn.type = "button";
        hideBtn.addEventListener("click", () => {
          colDiv.remove();
        });

        const smallText = document.createElement("small");
        smallText.classList.add("text-muted");
        smallText.innerText = "ID:" + data.id;

        btnDiv.appendChild(viewBtn);
        btnDiv.appendChild(hideBtn);
        btnDiv.appendChild(smallText);

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardDescription);
        cardBody.appendChild(btnDiv);

        cardDiv.appendChild(cardImg);
        cardDiv.appendChild(cardBody);

        colDiv.appendChild(cardDiv);
        myCardsContainer.appendChild(colDiv);
      });
    })
    .catch((err) => console.log(err));
};

const firstBtn = document.getElementById("dogsBtn");
firstBtn.addEventListener("click", () => {
  fetchData("dogs");
});

const secondBtn = document.getElementById("horsesBtn");
secondBtn.addEventListener("click", () => {
  fetchData("horses");
});

const dataFromInput = () => {
  const inputText = document.getElementById("queryInput").value;
  fetchData(inputText);
};

const inputTextBtn = document.getElementById("fetchBtn");
inputTextBtn.addEventListener("click", dataFromInput);
