document.addEventListener("DOMContentLoaded", function () {
    const contactMessagesTable = document.getElementById("contact-messages-table");

    // 🔗 Replace this URL with your actual backend API endpoint
    fetch("https://yourdomain.com/api/messages")
      .then(response => response.json())
      .then(messages => {
        messages.forEach(msg => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${msg.name}</td>
            <td>${msg.phone}</td>
            <td>${msg.email}</td>
            <td>${msg.subject}</td>
            <td>${msg.message}</td>
          `;
          contactMessagesTable.appendChild(row);
        });
      })
      .catch(error => {
        console.error("Error fetching contact messages:", error);
        contactMessagesTable.innerHTML = `<tr><td colspan="5">Error loading messages</td></tr>`;
      });
  });