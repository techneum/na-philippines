// MODEL
class Model {
  #coords = [];
  #meetings = [];

  set coords(coords) {
    this.#coords = coords;
  }

  get coords() {
    return this.#coords;
  }

  async getMeetings() {
    const response = await fetch(
      "https://raw.githubusercontent.com/techneum/na-meetings/main/meetings.json"
    );
    const data = await response.json();
    this.#meetings = data;
    return this.#meetings;
  }

  filterMeetings(day) {
    if (day === "All") return this.#meetings;
    return this.#meetings.filter((meeting) => meeting.days.includes(day));
  }

  getActiveMeetings() {
    return this.#meetings.length;
  }
}

// VIEW
class View {
  #map;
  #layerMarkers;

  constructor() {
    this.form = document.querySelector(".form");
  }

  renderMap(coords) {
    this.#map = L.map("map").setView(coords, 6);
    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);
  }

  renderMarkers(meetings) {
    if (this.#layerMarkers) {
      this.#layerMarkers.clearLayers();
    }
    this.#layerMarkers = L.layerGroup().addTo(this.#map);

    meetings.forEach((meeting) => {
      L.marker(meeting.coords)
        .addTo(this.#layerMarkers)
        .bindPopup(
          L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: true,
            closeOnClick: true,
            className: "meeting-popup",
          })
        )
        .setPopupContent(
          `
        <p class="meeting-title">${meeting.homegroup}</p>
        <p class="meeting-schedule">${meeting.schedule}</p>
        <p class="meeting-address">${meeting.address}</p>
        <p class="meeting-contact">${meeting.contact || ""}</p>
        `
        )
        .on("click", (e) => this.moveToPopup(e, meeting));
    });
  }

  moveToPopup(e, meeting) {
    const zoom = this.#map.getZoom();
    this.#map.setView(meeting.coords, zoom);
  }

  renderActiveMeetings(number) {
    const header = document.querySelector(".header");
    const html = `<p class="header__active-meetings">Active meetings: ${number}</p>`;
    header.insertAdjacentHTML("beforeend", html);
  }
}

// APP
class App {
  #coords;

  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.#getCurrentPosition();
    this.#setupEventListeners();
  }

  #getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        // Save coordinates
        this.model.coords = [latitude, longitude];

        // Render Map
        this.view.renderMap(this.model.coords);

        // Render Meetings
        this.model
          .getMeetings()
          .then((meetings) => this.view.renderMarkers(meetings));
      },
      (position) => {
        // alert("Please allow location access to see NA meetings near you.");

        // Render Map
        this.view.renderMap([12.0258538, 117.896493]);

        // Render Meetings
        this.model
          .getMeetings()
          .then((meetings) => this.view.renderMarkers(meetings));
      }
    );
  }

  #setupEventListeners() {
    this.view.form.addEventListener("change", this.#handleForm);
  }

  #handleForm = (e) => {
    const day = e.target.value;
    const meetings = this.model.filterMeetings(day);

    this.view.renderMarkers(meetings);
  };
}

window.addEventListener("DOMContentLoaded", () => {
  const app = new App(new Model(), new View());
});
