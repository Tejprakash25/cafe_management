async function fetchReservations() {
    try {
      const response = await fetch("http://localhost:5000/get_reservations");
      const reservations = await response.json();
      displayReservations(reservations);
    } catch (error) {
      console.error("Error fetching reservations:", error);
    }
  }

  function displayReservations(reservations) {
    const tableBody = document.getElementById("reservation-list");
    tableBody.innerHTML = "";

    reservations.forEach(res => {
      const row = `
        <tr>
          <td>${res.id}</td>
          <td>${res.name}</td>
          <td>${res.phone}</td>
          <td>${res.date}</td>
          <td>${res.time}</td>
          <td>${res.table}</td>
          <td><span class="status ${res.status.toLowerCase()}">${res.status}</span></td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });
  }

  // Optional: Search Filter
  document.getElementById("search-input").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const rows = document.querySelectorAll("#reservation-list tr");
    rows.forEach(row => {
      row.style.display = row.innerText.toLowerCase().includes(query) ? "" : "none";
    });
  });

  window.onload = fetchReservations;