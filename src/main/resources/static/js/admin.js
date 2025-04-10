document.addEventListener("DOMContentLoaded", function() {
    fetch('/api/dashboard-data') // Replace with actual backend API endpoint
        .then(response => response.json())
        .then(data => {
            document.getElementById("sales-amount").textContent = $${data.sales};
            document.getElementById("active-staff").textContent = data.activeStaff;
            document.getElementById("todays-reservations").textContent = data.todaysReservations;
            document.getElementById("low-stock-items").textContent = data.lowStockItems;

            const ordersTable = document.getElementById("orders-table");
            ordersTable.innerHTML = "";
            data.recentOrders.forEach(order => {
                const row = <tr>
                    <td>${order.id}</td>
                    <td>${order.customer}</td>
                    <td>${order.items}</td>
                    <td>$${order.total}</td>
                    <td><span class="status ${order.status.toLowerCase()}">${order.status}</span></td>
                </tr>;
                ordersTable.innerHTML += row;
            });

            const reservationsTable = document.getElementById("reservations-table");
            reservationsTable.innerHTML = "";
            data.todaysReservationsList.forEach(reservation => {
                const row = <tr>
                    <td>${reservation.id}</td>
                    <td>${reservation.customer}</td>
                    <td>${reservation.time}</td>
                    <td>${reservation.guests}</td>
                    <td><span class="status ${reservation.status.toLowerCase()}">${reservation.status}</span></td>
                </tr>;
                reservationsTable.innerHTML += row;
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});
// Fetch reservations from the backend
async function fetchReservations() {
    try {
        const response = await fetch("http://localhost:5000/get_reservations"); // Change URL if needed
        const reservations = await response.json();

        const tableBody = document.getElementById("reservation-list");
        tableBody.innerHTML = ""; // Clear previous data

        reservations.forEach(reservation => {
            const row = `
                <tr>
                    <td>${reservation.id}</td>
                    <td>${reservation.name}</td>
                    <td>${reservation.phone}</td>
                    <td>${reservation.date}</td>
                    <td>${reservation.time}</td>
                    <td>${reservation.table}</td>
                    <td>${reservation.status}</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    } catch (error) {
        console.error("Error fetching reservations:", error);
    }
}

// Fetch reservations when the page loads
window.onload = fetchReservations;
const profileDropdown = document.querySelector('.profile-dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

// Toggle dropdown on click
profileDropdown.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the click from bubbling to document
    dropdownContent.classList.toggle('show');
});

// Hide dropdown when clicking outside
document.addEventListener('click', () => {
    dropdownContent.classList.remove('show');
});