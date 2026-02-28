// Internship Data
const internships = [
    {title: "Frontend Intern", company: "TechNova", beginner: true},
    {title: "AI Intern", company: "FutureAI", beginner: false},
    {title: "Web Developer Intern", company: "StartupHub", beginner: true},
    {title: "Cloud Intern", company: "SkyNet", beginner: false}
];

// Tech Updates Data
const updates = [
    {title:"New AI model released", sector:"AI"},
    {title:"Startup raises $10M funding", sector:"Startups"},
    {title:"Cloud security breakthrough", sector:"Cloud"},
    {title:"Blockchain healthcare solution", sector:"Blockchain"},
    {title:"Cyber attack detection tool", sector:"Cybersecurity"}
];


// Display Internships
function displayInternships(list){
    const container = document.getElementById("internship-list");
    container.innerHTML = "";

    list.forEach(intern => {
        container.innerHTML += `
        <div class="internship">
            <h3>${intern.title}</h3>
            <p>${intern.company}</p>
            <p>${intern.beginner ? "Beginner Friendly" : "Intermediate Level"}</p>
        </div>
        `;
    });

    document.getElementById("totalInternships").innerText = list.length;
}

// Filters
function showAll(){
    displayInternships(internships);
}

function filterBeginner(){
    const filtered = internships.filter(i => i.beginner);
    displayInternships(filtered);
}

// Search
function searchInternships(){
    let value = document.getElementById("searchBox").value.toLowerCase();
    let filtered = internships.filter(i =>
        i.title.toLowerCase().includes(value) ||
        i.company.toLowerCase().includes(value)
    );
    displayInternships(filtered);
}


// Render Tech Updates
function renderUpdates(data){
    const feed = document.getElementById("feed");
    feed.innerHTML = "";

    data.forEach(item=>{
        feed.innerHTML += `
        <div class="update">
        <h3>${item.title}</h3>
        <p>Sector: ${item.sector}</p>
        </div>
        `;
    });

    document.getElementById("updatesCount").innerText = data.length;
}

// Sector Filter
function filterSector(sector){
    if(sector === "All"){
        renderUpdates(updates);
        return;
    }

    const filtered = updates.filter(u => u.sector === sector);
    renderUpdates(filtered);
}


// Simulated Real-Time Updates
setInterval(()=>{
    updates.unshift({
        title:"New innovation reported " + Math.floor(Math.random()*100),
        sector:"AI"
    });

    renderUpdates(updates);
},15000);


// Initial Load
displayInternships(internships);
renderUpdates(updates);
