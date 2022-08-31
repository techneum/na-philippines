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
      area: "Luzon",
      contact: null,
    },
    {
      id: uuid.v4(),
      title: "Kickstarter Meeting Homegroup",
      days: ["Wednesday"],
      schedule: "Wednesdays, 9:00 - 10:00 AM",
      location: "Starbucks West Avenue, QC",
      coords: [14.6452221, 121.0236622],
      area: "Luzon",
      contact: null,
    },
    {
      id: uuid.v4(),
      title: "Northern Lights Homegroup",
      days: ["Friday"],
      schedule: "Fridays, 9:00 - 10:00 AM",
      location: "Smoke Restaurant, Paoay, Ilocos Norte",
      coords: [18.0637703, 120.520885],
      area: "Luzon",
      contact: null,
    },
    {
      id: uuid.v4(),
      title: "May Tama O Wala",
      days: ["Sunday"],
      schedule: "Sundays, 3:00 - 4:00 PM",
      location: "Mary the Queen Church, San Juan",
      coords: [14.6037194, 121.0400289],
      area: "Luzon",
      contact: null,
    },
    {
      id: uuid.v4(),
      title: "Baguio Highlanders",
      days: ["Tuesday", "Sunday"],
      schedule: "Tues and Sun, 6:00 - 7:00 PM",
      location: "Don Bosco Church, Trancoville",
      coords: [16.4262746, 120.5967709],
      area: "Luzon",
      contact: null,
    },
    {
      id: uuid.v4(),
      title: "Morning Fix Meeting",
      days: ["Friday"],
      schedule: "Fridays, 9:00 - 10:00 AM",
      location: "Max's Restaurant Scout Tuazon, QC",
      coords: [14.6297999, 121.027478],
      area: "Luzon",
      contact: null,
    },
    {
      id: uuid.v4(),
      title: "Mayon Homegroup",
      days: ["Thursday", "Saturday"],
      schedule: "Thurs, 10:00 - 11:00 PM<br>Sat, 6:00 - 7:00 PM",
      location: "Pares Queen, Legaspi City",
      coords: [13.1408755, 123.7458523],
      area: "Luzon",
      contact: null,
    },
    {
      id: uuid.v4(),
      title: "Kapatiran Homegroup",
      days: ["Sunday"],
      schedule: "Sundays, 10:00 - 11:00 AM",
      location: "Starbucks - 2nd Floor\nSierra Valley, Cainta",
      coords: [14.5814961, 121.0987433],
      area: "Luzon",
      contact: null,
    },
    {
      id: uuid.v4(),
      title: "Naga Homegroup: NA Gratitude Meeting",
      days: ["Friday", "Sunday"],
      schedule: "Fri, 4:00 PM; Sun 10:00 AM",
      location: "Basilica Church, Naga City",
      coords: [13.6320573, 123.1977921],
      area: "Luzon",
      contact: null,
    },
    {
      id: uuid.v4(),
      title: "NA Bacoor Homegroup",
      days: ["Monday"],
      schedule: "Mondays, 6:30 PM - 7:30 PM",
      location: "Multi-purpose Hall, Talaba 7",
      coords: [14.4573774, 120.9325495],
      area: "Luzon",
      contact: null,
    },
    {
      id: uuid.v4(),
      title: "ODAAT Apalit Homegroup",
      days: ["Saturday"],
      schedule: "Saturdays, 10:00 - 11:00 AM",
      location: "Chew and Brew Milk Tea Station",
      coords: [15.1351378, 120.43444915],
      area: "Luzon",
      contact: null,
    },
    {
      id: uuid.v4(),
      title: "Bahala na Siya Homegroup",
      days: ["Sunday"],
      schedule: "Sundays, 6:00 - 7:00 PM",
      location: "US Healthmark Building, Angeles Pampanga",
      coords: [15.1659858, 120.5619614],
      area: "Luzon",
      contact: null,
    },
    {
      id: uuid.v4(),
      title: "Reborn Homegroup",
      days: ["Monday"],
      schedule: "Mondays, 6:30 - 7:30 PM",
      location: "Coffee Bean and Tea Leaf<br>Robinson's Galleria - San Pedro",
      coords: [14.3520893, 120.9965543],
      area: "Luzon",
      contact: null,
    },
    {
      id: uuid.v4(),
      title: "Checkpoint",
      days: ["Thursday"],
      schedule: "Thursday, 6:30 - 7:30 PM",
      location: "Jollibee Checkpoint\nGovernor's Drive, Carmona Cavite",
      coords: [14.3110882, 121.0382753],
      area: "Luzon",
      contact: null,
    },
    {
      id: uuid.v4(),
      title: "ODAAT",
      days: ["Friday"],
      schedule: "Fridays, 7:00 - 8:00 PM",
      location: "Kiwanis Clubhouse<br>Diamond Subarea, Angeles City",
      coords: [15.1625429, 120.5946972],
      area: "Luzon",
      contact: null,
    },
    {
      id: uuid.v4(),
      title: "Abe Abe Bang Matibe",
      days: ["Monday"],
      schedule: "Mondays, 5:30 - 6:30 PM",
      location: "Coffee Cat Coffee and Restaurant<br>Angeles City",
      coords: [15.1349769, 120.570106],
      area: "Luzon",
      contact: null,
    },
    {
      id: uuid.v4(),
      title: "Makati Greenminds NA Meeting",
      days: ["Wednesday"],
      schedule: "Wednesdays, 8:00 AM",
      location: "Café Breton, Greenbelt 3",
      coords: [14.5519322, 121.0194157],
      area: "Luzon",
      contact: null,
    },
    {
      id: uuid.v4(),
      title: "Monday by the Bay",
      days: ["Monday"],
      schedule: "Mondays, 8:30 AM",
      location: "Starbucks, CCP Pasay",
      coords: [14.5588863, 120.9835952],
      area: "Luzon",
      contact: null,
    },
    {
      id: uuid.v4(),
      title: "Camarin Homegroup",
      days: ["Saturday"],
      schedule: "Saturdays, 10:00 AM",
      location:
        "Kanlungan Camarin RD, Caloocan City<br>At the back of Caloocan City Medical Center",
      coords: [14.7559803, 121.0417395],
      area: "Luzon",
      contact: null,
    },
    {
      id: uuid.v4(),
      title: "Cagayan De Oro",
      days: ["Wednesday"],
      schedule: "Wednesdays, 6:00 - 7:00 PM",
      location: "Stonestown, Cagayan De Oro",
      coords: [8.449056, 124.6214044],
      area: "Mindanao",
      contact: "GSR Jojo B. 09285034440",
    },
    {
      id: uuid.v4(),
      title: "Cagayan De Oro",
      days: ["Tuesday", "Thursday", "Saturday"],
      schedule: "Tues, Thurs, Sat, 6:00 - 7:00 PM",
      location: "Cathedral, Cagayan De Oro",
      coords: [8.4753108, 124.6407165],
      area: "Mindanao",
      contact: "null",
    },
    {
      id: uuid.v4(),
      title: "Iligan",
      days: ["Monday", "Wednesday", "Saturday"],
      schedule: "Mon, Wed, Sat, 7:00 - 8:00 PM",
      location: "Biberia Residences, Iligan City",
      coords: [8.2072964, 124.2167084],
      area: "Mindanao",
      contact: "GSR Mark A. 09356330309",
    },
    {
      id: uuid.v4(),
      title: "Ozamiz Recovery Group Live Clean or Die",
      days: ["Monday", "Tuesday", "Wednesday", "Saturday", "Sunday"],
      schedule: "Mon & Tues, 6:00 - 7:00 PM<br>Wed, Sat, Sun, 7:00 - 8:00 PM",
      location: "Ledesma St Aguada, Ozamiz City",
      coords: [8.1471054, 123.8433451],
      area: "Mindanao",
      contact: "Matic B.  09177023351",
    },
    {
      id: uuid.v4(),
      title: "Ozamis Recovery Road Home Group ",
      days: ["Thursday", "Saturday", "Friday", "Sunday"],
      schedule:
        "Thurs & Sat, 7:00 - 8:00 PM<br>Fridays, 4:00 - 5:00 PM<br>Sundays, 10:00 - 11:00 AM",
      location: "Purok 6 Carangan, Ozamiz City",
      coords: [8.1382808, 123.8240329],
      area: "Mindanao",
      contact: null,
    },
    {
      id: uuid.v4(),
      title: "Clarin",
      days: ["Sunday"],
      schedule: "Sundays, 3:00 - 4:00 PM",
      location: "Clarin House of Suman, Misamis Occidental",
      coords: [8.1940579, 123.8586641],
      area: "Mindanao",
      contact: "GSR Kerr B. 09452241240",
    },
    {
      id: uuid.v4(),
      title: "Jimenez",
      days: ["Sunday"],
      schedule: "Saturdays, 4:00 - 5:00 PM",
      location: "Nacional Barangay Hall, Misamis Occidental",
      coords: [8.3620633, 123.7546354],
      area: "Mindanao",
      contact: "GSR Danny T. 09508013651",
    },
    {
      id: uuid.v4(),
      title: "Oroquieta Homegroup",
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      schedule: "Mon - Sat, 7:00 - 8:00 PM",
      location: "Atty Blanco Residence, Oroquieta City",
      coords: [8.446472, 123.6163555],
      area: "Mindanao",
      contact: "GSR Peter 09087674704",
    },
    {
      id: uuid.v4(),
      title: "Oroquieta Homegroup",
      days: ["Sunday"],
      schedule: "Sundays, 8:00 - 9:00 AM",
      location: "Castro Beach Resort, Oroquieta City",
      coords: [8.4812642, 123.7724842],
      area: "Mindanao",
      contact: "GSR Peter 09087674704",
    },
    {
      id: uuid.v4(),
      title: "Butuan",
      days: ["Saturday"],
      schedule: "Saturdays, 3:00 - 4:00 PM",
      location: "St. Joseph Cathedral, Butuan City",
      coords: [8.9477831, 125.5403113],
      area: "Mindanao",
      contact: null,
    },
    {
      id: uuid.v4(),
      title: "Patin-ay Homegroup",
      days: ["Monday", "Wednesday", "Friday"],
      schedule: "Mon, Wed, Fri, 7:00 - 8:00 PM",
      location: "Agusan Del Norte",
      coords: [8.9086613, 125.3263951],
      area: "Mindanao",
      contact: "GSR Awing 09154012741",
    },
    {
      id: uuid.v4(),
      title: "San Franz Homegroup",
      days: ["Tuesday", "Thursday"],
      schedule: "Tues & Thurs, 7:00 - 8:00 PM",
      location: "Agusan Del Norte",
      coords: [8.9086613, 125.3263951],
      area: "Mindanao",
      contact: "GSR Awing 09154012741",
    },
    {
      id: uuid.v4(),
      title: "Trento Homegroup",
      days: ["Tuesday", "Thursday", "Sunday"],
      schedule: "Tues, Thurs, Sun, 7:00 - 8:00 PM",
      location: "Agusan Del Norte",
      coords: [8.9086613, 125.3263951],
      area: "Mindanao",
      contact: "GSR Awing 09154012741",
    },
    {
      id: uuid.v4(),
      title: "Bah-bah Home Group",
      days: ["Saturday"],
      schedule: "Saturdays, 7:00 - 8:00 PM",
      location: "Agusan Del Norte",
      coords: [8.9086613, 125.3263951],
      area: "Mindanao",
      contact: "GSR Awing 09154012741",
    },
    {
      id: uuid.v4(),
      title: "Davao",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      schedule: "Mon - Fri, 6:00 - 7:00 PM",
      location: "Pia's Cafe, Davao City",
      coords: [7.0567553, 125.5980363],
      area: "Mindanao",
      contact: null,
    },
    {
      id: uuid.v4(),
      title: "Davao",
      days: ["Saturday"],
      schedule: "Saturdays, 9:00 - 10:00 AM",
      location: "Pia's Cafe, Davao City",
      coords: [7.11409, 125.6326207],
      area: "Mindanao",
      contact: null,
    },
    {
      id: uuid.v4(),
      title: "Davao",
      days: ["Sunday"],
      schedule: "Sundays, 2:00 - 3:00 PM",
      location: "Cafe Munda, Davao City",
      coords: [7.0588228, 125.5908472],
      area: "Mindanao",
      contact: null,
    },
    {
      id: uuid.v4(),
      title: "Kidapwan",
      days: ["Thursday"],
      schedule: "Thursdays, 6:00 - 7:00 PM",
      location: "Petron,  ",
      coords: [6.9785639, 125.0788117],
      area: "Mindanao",
      contact: "GSR Elizer A. 09702483483",
    },
    {
      id: uuid.v4(),
      title: "Kidapwan",
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      schedule: "TBA, 6:00 - 7:00 PM",
      location: "Apo Sandawa Homes, Kidapwan City",
      coords: [6.9975457, 125.0765562],
      area: "Mindanao",
      contact: "GSR Onrakus B. 09465788221",
    },
    {
      id: uuid.v4(),
      title: "Malaybalay",
      days: ["Tuesday", "Thursday", "Saturday", "Sunday"],
      schedule: "Tues, Thurs, Sat, Sun, 6:30 - 7:30 PM",
      location: "Barangay 2 Barangay Hall, Malaybalay",
      coords: [8.1571181, 125.1249164],
      area: "Mindanao",
      contact: "GSR Banjo A.",
    },
    {
      id: uuid.v4(),
      title: "Valencia Homegroup",
      days: ["Sunday"],
      schedule: "Sundays, 5:00 - 6:00 PM",
      location: "2nd floor New Terminal Bldg, Valencia City Bukidnon",
      coords: [7.914761, 125.092316],
      area: "Mindanao",
      contact: "GSR Vincent O. 09056984453",
    },
    {
      id: uuid.v4(),
      title: "Cabadbaran",
      days: ["Saturday"],
      schedule: "Saturdays, 2:00 - 3:00 PM",
      location: "La Vega Shore, Brgy Caasinan, Cabadbaran City",
      coords: [9.1398118, 125.5192996],
      area: "Mindanao",
      contact: "GSR Michael J. 09197036472",
    },
    {
      id: uuid.v4(),
      title: "Gensan",
      days: ["Wednesday"],
      schedule: "Wednesdays, 5:30 - 6:30 PM",
      location: "PinobreTel Suites, General Santos City",
      coords: [6.1289483, 125.1835748],
      area: "Mindanao",
      contact: "GSR Jeffrey C. 09186789518",
    },
    {
      id: uuid.v4(),
      title: "F’lomlok Homegroup",
      days: ["Sunday"],
      schedule: "Sundays, 2:00 - 3:00 PM",
      location: "PinobreTel Suites, General Santos City",
      coords: [6.1292234, 125.1864208],
      area: "Mindanao",
      contact: "GSR Benjo P. 09515054246",
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

        // Show all meetings marker
        this.view.renderMarkers(this.model.meetings);

        // Show number of active meetings
        // this.view.renderActiveMeetings(this.model.getActiveMeetings());
      },
      (position) => {
        // alert("Please allow location access to see NA meetings near you.");

        // Render Map
        this.view.renderMap([16.4262746, 120.5967709]);

        // Show all meetings marker
        this.view.renderMarkers(this.model.meetings);

        // Show number of active meetings
        // this.view.renderActiveMeetings(this.model.getActiveMeetings());
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

const app = new App(new Model(), new View());
