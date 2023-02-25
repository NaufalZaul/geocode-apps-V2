import API from "./API/api";

const listArea = document.getElementById("list-area");

const location = {
  url_location: API.API_URL,
  url_get_location: API.API_GET_LOCATION,
  data: "",
};

const objectReturn = () => {
  return [
    "country",
    "nameCountry",
    "latitude",
    "longitude",
    "continent",
    "lookupSource",
    "city",
    "countryName",
    "countryCode",
    "principalSubdivision",
    "principalSubdivisionCode",
  ];
};

const ListElement = (title, value) => {
  return `<div class="w-4/5 bg-zinc-50 m-auto p-10 shadow-lg">
  <h1 class="text-2xl font-bold mb-2 capitalize">${title}</h1>
  <span class=" flex items-center font-light mb-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="w-4 h-4 mr-2"
    >
      <path
        fill-rule="evenodd"
        d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
        clip-rule="evenodd"
      />
    </svg>
    ${value}
  </span>
  <p class="font-light">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Incidunt aspernatur quibusdam placeat cumque earum assumenda, at
  </p>
</div>`
}


async function GetCoordinate() {

  const latitude = document.getElementById("latitude").value;
  const longitude = document.getElementById("longitude").value;
  // 5.152149,  46.199616
  const getLocation = await fetch(location.url_get_location(latitude, longitude))
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((err) => console.error(err));

  for (const key in getLocation) {
    const obj = objectReturn().find(search => search == key)

    if (obj != undefined) {
      const element = getLocation[key];
      listArea.innerHTML += ListElement(key, element)
    }
  }

}

async function GetCountry() {
  const country = document.getElementById("country").value;

  const getDataLocal = localStorage.getItem(`${country}`);
  const parseOBJ = JSON.parse(getDataLocal);
  for (const key in parseOBJ) {
    const obj = objectReturn().find((search) => search == key);

    if (obj != undefined) {
      const element = parseOBJ[key];
      listArea.innerHTML += ListElement(key, element);
    }
  }

}
export default { GetCoordinate, GetCountry }