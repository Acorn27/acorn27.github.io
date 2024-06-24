// Sample project data
const projects = [
    { name: "Project 1", description: "Description of Project 1" },
    { name: "Project 2", description: "Description of Project 2" },
    { name: "Project 3", description: "Description of Project 3" }
];

// Function to dynamically add projects to the page
function addProjects() {
    const projectList = document.getElementById("project-list");
    projects.forEach(project => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${project.name}</strong>: ${project.description}`;
        projectList.appendChild(li);
    });
}

// Call the function when the page loads
window.onload = addProjects;