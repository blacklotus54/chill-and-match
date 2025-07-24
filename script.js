// --- Données des événements ---
const events = [
    {
        id: "event1",
        date: "Jeudi 7 août 2025",
        lieu: "Galerie Gourmande, alga",
        desc: "Soirée chill, rencontres, et jeux de société classiques.",
        img: "https://www.pexels.com/fr-fr/photo/personne-individu-regarder-porter-8762312/"
    },
    {
        id: "event2",
        date: "Avenir",
        lieu: "Quelque part dans cotonou",
        desc: "Speed dating ludique et jeux modernes, ambiance cosy.",
        img: "https://images.pexels.com/photos/8762375/pexels-photo-8762375.jpeg"
    },
    {
        id: "event3",
        date: "Avenir",
        lieu: "Nous penssont a vous faire sortir de la ville hehe!",
        desc: "Rencontres, chill, et tournois de jeux de société.",
        img: "https://stock.adobe.com/fr/images/couples-dancing-and-drinking-at-evening-party/100702496"
    }
];

// --- Injection de la liste des événements ---
function displayEvents() {
    const eventList = document.getElementById('event-list');
    eventList.innerHTML = events.map(ev => `
        <div class="event-card">
            <img src="${ev.img}" alt="Image événement ${ev.date}">
            <div class="event-info">
                <div class="event-date">${ev.date}</div>
                <div class="event-place">${ev.lieu}</div>
                <div class="event-desc">${ev.desc}</div>
            </div>
        </div>
    `).join('');
}

// --- Remplissage du select événements ---
function fillEventOptions() {
    const select = document.getElementById('evenement');
    select.innerHTML = events.map(ev =>
        `<option value="${ev.id}">${ev.date} — ${ev.lieu}</option>`
    ).join('');
}

// --- Gestion du formulaire d'inscription ---
document.addEventListener("DOMContentLoaded", () => {
    displayEvents();
    fillEventOptions();

    const form = document.getElementById('registration-form');
    const confirmation = document.getElementById('confirmation-message');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        confirmation.style.opacity = 0;
        setTimeout(() => {
            confirmation.textContent = "Merci pour votre inscription ! À bientôt à Chill & Match 🎉";
            confirmation.style.opacity = 1;
        }, 180);
        form.reset();
    });

    // --- Mode nuit ---
    const nightBtn = document.getElementById('toggle-night');
    nightBtn.addEventListener('click', () => {
        document.body.classList.toggle('night');
        // Changement icône
        const iconSpan = nightBtn.querySelector('.icon-moon');
        iconSpan.textContent = document.body.classList.contains('night') ? "☀️" : "🌙";
        nightBtn.textContent = "";
        nightBtn.appendChild(iconSpan);
        nightBtn.appendChild(document.createTextNode(document.body.classList.contains('night') ? " Mode Jour" : " Mode Nuit"));
    });
});