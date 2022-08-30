// MODEL
class Model {
  #coords = [];
  #meetings = [
    {
      id: uuid.v4(),
      title: "Imus Homegroup",
      days: ["Wednesday"],
      schedule: "Wednesdays, 6:30 - 7:30 PM",
      location: "Imus Cathedral Church, Cavite",
      coords: [14.4297707, 120.9338289],
    },
    {
      id: uuid.v4(),
      title: "Kickstarter Meeting Homegroup",
      days: ["Wednesday"],
      schedule: "Wednesdays, 9:00 - 10:00 AM",
      location: "Starbucks West Avenue, QC",
      coords: [14.6452221, 121.0236622],
    },
    {
      id: uuid.v4(),
      title: "Northern Lights Homegroup",
      days: ["Friday"],
      schedule: "Fridays, 9:00 - 10:00 AM",
      location: "Smoke Restaurant, Paoay, Ilocos Norte",
      coords: [18.0637703, 120.520885],
    },
    {
      id: uuid.v4(),
      title: "May Tama O Wala",
      days: ["Sunday"],
      schedule: "Sundays, 3:00 - 4:00 PM",
      location: "Mary the Queen Church, San Juan",
      coords: [14.6037194, 121.0400289],
    },
    {
      id: uuid.v4(),
      title: "Baguio Highlanders",
      days: ["Tuesday", "Sunday"],
      schedule: "Tues and Sun, 6:00 - 7:00 PM",
      location: "Don Bosco Church, Trancoville",
      coords: [16.4262746, 120.5967709],
    },
    {
      id: uuid.v4(),
      title: "Morning Fix Meeting",
      days: ["Friday"],
      schedule: "Fridays, 9:00 - 10:00 AM",
      location: "Max's Restaurant Scout Tuazon, QC",
      coords: [14.6297999, 121.027478],
    },
    {
      id: uuid.v4(),
      title: "Mayon Homegroup",
      days: ["Thursday", "Saturday"],
      schedule: "Thurs, 10:00 - 11:00 PM<br>Sat, 6:00 - 7:00 PM",
      location: "Pares Queen, Legaspi City",
      coords: [13.1408755, 123.7458523],
    },
    {
      id: uuid.v4(),
      title: "Kapatiran Homegroup",
      days: ["Sunday"],
      schedule: "Sundays, 10:00 - 11:00 AM",
      location: "Starbucks - 2nd Floor\nSierra Valley, Cainta",
      coords: [14.5814961, 121.0987433],
    },
    {
      id: uuid.v4(),
      title: "Naga Homegroup: NA Gratitude Meeting",
      days: ["Friday", "Sunday"],
      schedule: "Fri, 4:00 PM; Sun 10:00 AM",
      location: "Basilica Church, Naga City",
      coords: [13.6320573, 123.1977921],
    },
    {
      id: uuid.v4(),
      title: "NA Bacoor Homegroup",
      days: ["Monday"],
      schedule: "Mondays, 6:30 PM - 7:30 PM",
      location: "Multi-purpose Hall, Talaba 7",
      coords: [14.4573774, 120.9325495],
    },
    {
      id: uuid.v4(),
      title: "ODAAT Apalit Homegroup",
      days: ["Saturday"],
      schedule: "Saturdays, 10:00 - 11:00 AM",
      location: "Chew and Brew Milk Tea Station",
      coords: [15.1351378, 120.43444915],
    },
    {
      id: uuid.v4(),
      title: "Bahala na Siya Homegroup",
      days: ["Sunday"],
      schedule: "Sundays, 6:00 - 7:00 PM",
      location: "US Healthmark Building, Angeles Pampanga",
      coords: [15.1659858, 120.5619614],
    },
    {
      id: uuid.v4(),
      title: "Reborn Homegroup",
      days: ["Monday"],
      schedule: "Mondays, 6:30 - 7:30 PM",
      location: "Coffee Bean and Tea Leaf<br>Robinson's Galleria - San Pedro",
      coords: [14.3520893, 120.9965543],
    },
    {
      id: uuid.v4(),
      title: "Checkpoint",
      days: ["Thursday"],
      schedule: "Thursday, 6:30 - 7:30 PM",
      location: "Jollibee Checkpoint\nGovernor's Drive, Carmona Cavite",
      coords: [14.3110882, 121.0382753],
    },
    {
      id: uuid.v4(),
      title: "ODAAT",
      days: ["Friday"],
      schedule: "Fridays, 7:00 - 8:00 PM",
      location: "Kiwanis Clubhouse<br>Diamond Subdivision, Angeles City",
      coords: [15.1625429, 120.5946972],
    },
    {
      id: uuid.v4(),
      title: "Abe Abe Bang Matibe",
      days: ["Monday"],
      schedule: "Mondays, 5:30 - 6:30 PM",
      location: "Coffee Cat Coffee and Restaurant<br>Angeles City",
      coords: [15.1349769, 120.570106],
    },
    {
      id: uuid.v4(),
      title: "Makati Greenminds NA Meeting",
      days: ["Wednesday"],
      schedule: "Wednesdays, 8:00 AM",
      location: "Café Breton, Greenbelt 3",
      coords: [14.5519322, 121.0194157],
    },
    {
      id: uuid.v4(),
      title: "Monday by the Bay",
      days: ["Monday"],
      schedule: "Mondays, 8:30 AM",
      location: "Starbucks, CCP Pasay",
      coords: [14.5588863, 120.9835952],
    },
    {
      id: uuid.v4(),
      title: "Camarin Homegroup",
      days: ["Saturday"],
      schedule: "Saturdays, 10:00 AM",
      location:
        "Kanlungan Camarin RD, Caloocan City<br>At the back of Caloocan City Medical Center",
      coords: [14.7559803, 121.0417395],
    },
  ];

  set coords(coords) {
    this.#coords = coords;
  }

  get coords() {
    return this.#coords;
  }

  get meetings() {
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
  }

  renderMap(coords) {
    this.#map = L.map("map").setView(coords, 7);
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
        <p class="meeting-title">${meeting.title}</p>
        <p class="meeting-schedule">${meeting.schedule}</p>
        <p class="meeting-location">${meeting.location}</p>
        `
        )
        .on("click", (e) => this.moveToPopup(e, meeting));
    });
  }

  moveToPopup(e, meeting) {
    const zoom = this.#map.getZoom();
    this.#map.setView(meeting.coords, zoom);
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

        window.addEventListener("load", () => {
          // Render Map
          this.view.renderMap(this.model.coords);

          // Show all meetings marker
          this.view.renderMarkers(this.model.meetings);
        });
      },
      (position) => {
        // alert("Please allow location access to see NA meetings near you.");
        window.addEventListener("load", () => {
          // Render Map
          this.view.renderMap([16.4262746, 120.5967709]);

          // Show all meetings marker
          this.view.renderMarkers(this.model.meetings);
        });
      }
    );
  }

  #setupEventListeners() {
    this.view.form.addEventListener("change", this.#handleForm);
  }

  #handleForm = (e) => {
    const day = e.target.value;
    const meetings = this.model.filterMeetings(day);

    console.log("handle");
    this.view.renderMarkers(meetings);
  };
}

const app = new App(new Model(), new View());
