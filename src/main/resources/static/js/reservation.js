document.addEventListener("DOMContentLoaded", function () {
    const timeInput = document.getElementById("time");
    const dateInput = document.getElementById("date");
    const button = document.querySelector("button");
    const form = document.querySelector("form");

    // Time Input Constraints
    timeInput.min = "09:00";
    timeInput.max = "23:00";

    timeInput.addEventListener("change", function () {
        let selectedTime = timeInput.value;
        if (selectedTime < "09:00") {
            alert("Time must be after 9:00 AM");
            timeInput.value = "09:00";
        } else if (selectedTime > "23:00") {
            alert("Time must be before 11:00 PM");
            timeInput.value = "23:00";
        }
    });

    // Date Input Constraints
    let today = new Date();
    let maxDate = new Date();
    maxDate.setMonth(today.getMonth() + 1);

    function formatDate(date) {
        let year = date.getFullYear();
        let month = String(date.getMonth() + 1).padStart(2, "0");
        let day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    let todayStr = formatDate(today);
    let maxDateStr = formatDate(maxDate);

    dateInput.min = todayStr;
    dateInput.max = maxDateStr;

    dateInput.addEventListener("change", function () {
        if (dateInput.value < todayStr || dateInput.value > maxDateStr) {
            alert(`Please select a date between ${todayStr} and ${maxDateStr}.`);
            dateInput.value = todayStr;
        }
    });

    // Button Glow and Ripple
    button.addEventListener("mouseover", function () {
        button.style.boxShadow = "0px 0px 15px rgba(255, 215, 0, 0.8)";
        button.style.transition = "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out";
        button.style.transform = "scale(1.1)";
    });

    button.addEventListener("mouseleave", function () {
        button.style.boxShadow = "none";
        button.style.transform = "scale(1)";
    });

    button.addEventListener("click", function (event) {
        let x = event.clientX - button.offsetLeft;
        let y = event.clientY - button.offsetTop;

        let ripple = document.createElement("span");
        ripple.classList.add("ripple");
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });

    // Reservation Form Submit with Fetch
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const params = new URLSearchParams();

        for (const pair of formData.entries()) {
            params.append(pair[0], pair[1]);
        }

        try {
            const response = await fetch("http://localhost:8080/booking/makeReservation", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: params,
            });

            if (response.ok) {
                const message = await response.text();
                alert(message);
                form.reset();
            } else {
                alert("Failed to book reservation. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while booking. Please try later.");
        }
    });
});
