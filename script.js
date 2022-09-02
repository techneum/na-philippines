// MODEL
class Model {
  #meetings = [];

  async getMeetings() {
    // Fetch meetings data
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
}

// VIEW
class View {
  #map;
  #layerMarkers;

  constructor() {
    this.form = document.querySelector(".form");
    this.info = document.querySelector(".total-meetings");
  }

  renderMap(coords) {
    // Initialize map
    this.#map = L.map("map").setView(coords, 6);
    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);
  }

  renderMarkers(meetings) {
    // Check if layer group exists. If so, clear it.
    if (this.#layerMarkers) {
      this.#layerMarkers.clearLayers();
    }

    // Create new layer group
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

  renderTotalMeetings(number) {
    this.info.innerHTML = "";
    const html = `<p>Total Meetings: ${number}</p>`;
    this.info.insertAdjacentHTML("afterbegin", html);
  }
}

// APP
class App {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.#init();
    this.#setupEventListeners();
  }

  async #init() {
    // Render Map on Default Coordinates
    this.view.renderMap([12.689808, 123.108021]);

    // Get meetings from github
    const meetings = await this.model.getMeetings();

    // Render Markers
    this.view.renderMarkers(meetings);

    // Render Active Meetings Number
    this.view.renderTotalMeetings(meetings.length);
  }

  #setupEventListeners() {
    this.view.form.addEventListener("change", this.#handleForm);
  }

  #handleForm = (e) => {
    // Get day value from form
    const day = e.target.value;

    // Filter meetings by day
    const meetings = this.model.filterMeetings(day);

    // Render filtered markers
    this.view.renderMarkers(meetings);

    // Render Total Meetings
    this.view.renderTotalMeetings(meetings.length);
  };
}

window.addEventListener("load", () => {
  const app = new App(new Model(), new View());
});
