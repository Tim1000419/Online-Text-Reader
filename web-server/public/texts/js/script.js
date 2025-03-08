/*
    ONLINE-TEXT-READER Copyright (C) 2025 YI-EN JHAN  

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

async function fetchDataA() {
    const apiUrl = "http://localhost:3000/api/texts";

    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`API request failed with status code: ${response.status}`);
        }

        const data = await response.json();
        renderButtons(data);
    } catch (error) {
        console.error("An error occurred while retrieving data:", error.message);
    }
}

// **Generate Button**
function renderButtons(items) {
    const container = document.getElementById('button-container');
    if (!container) {
        console.error("Cannot find the containers of the buttons :　#button-container");
        return;
    }

    container.innerHTML = ''; // Clear old content

    items.forEach(item => {
        const button = document.createElement('button');
        button.textContent = item.title || "Unnamed"; // Avoid empty title
        button.className = 'btn';
        button.onclick = () => window.location.href = `../../text/${item.id}/`;

        container.appendChild(button);
    });
}

// **Execute on load**
document.addEventListener("DOMContentLoaded", fetchDataA);
