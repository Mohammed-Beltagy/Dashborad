// Every Single Line Has Been Written With Chat-GPT
const projects = [
  {
    title: "Elzero Dashboard",
    paragraph: "Elzero Dashboard Project Design And Programming And Hosting",
    date: "15/10/2021",
    team: ["team-1", "team-2", "team-3", "team-4", "team-2"],
    tags: ["Programming", "Design", "Hosting", "Marketing"],
    progress: "50",
    price: "2500",
  },
  {
    title: "Academy Portal",
    paragraph: "Academy Portal Project Design And Programming",
    date: "15/6/2022",
    team: ["team-1", "team-3", "team-2"],
    tags: ["Programming", "Design"],
    progress: "85",
    price: "1800",
  },
  {
    title: "Chatting Application",
    paragraph: "Chatting Application Project Design",
    date: "15/6/2022",
    team: ["team-3", "team-1", "team-4"],
    tags: ["Design"],
    progress: "100",
    price: "950",
  },
  {
    title: "Ahmed Dashboard",
    paragraph: "Ahmed Dashboard Project Design And Programming And Hosting",
    date: "15/6/2022",
    team: ["team-2", "team-3", "team-1", "team-4"],
    tags: ["Programming", "Design", "Hosting", "Marketing"],
    progress: "75",
    price: "1700",
  },
  {
    title: "Ahmed Portal",
    paragraph: "Ahmed Portal Project Design And Programming",
    date: "15/6/2022",
    team: ["team-2", "team-4", "team-1"],
    tags: ["Programming", "Design"],
    progress: "80",
    price: "850",
  },
  {
    title: "Mohamed Application",
    paragraph: "Mohamed Application Project Design",
    date: "15/6/2022",
    team: ["team-4", "team-2", "team-3"],
    tags: ["Design"],
    progress: "30",
    price: "950",
  },
  {
    title: "Mohamed Dashboard",
    paragraph: "Mohamed Dashboard Project Design And Programming And Hosting",
    date: "15/6/2022",
    team: ["team-3", "team-4", "team-2", "team-1"],
    tags: ["Programming", "Design", "Hosting", "Marketing"],
    progress: "75",
    price: "1950",
  },
  {
    title: "Mohamed Portal",
    paragraph: "Mohamed Portal Project Design And Programming",
    date: "15/6/2022",
    team: ["team-2", "team-1", "team-4"],
    tags: ["Programming", "Design"],
    progress: "60",
    price: "1650",
  },
  {
    title: "Ahmed Application",
    paragraph: "Ahmed Application Project Design",
    date: "15/6/2022",
    team: ["team-1", "team-3", "team-4"],
    tags: ["Design"],
    progress: "90",
    price: "950",
  },
];

// Insert Projects Data In Page
function appendElementToGrid(project) {
  // Turn Arrays (team, tags) Into HTML String
  let team = project.team
    .map(
      (member) =>
        `<img src="assets/images/team-members/${member}.png" alt="${member}">`
    )
    .join(" ");
  let tags = project.tags
    .map((tag) => `<span class="noevent-btn">${tag}</span>`)
    .join(" ");

  // Create HTML Elements
  const article = document.createElement("article");
  const titleDiv = document.createElement("div");
  const titleH3 = document.createElement("h3");
  const titleP = document.createElement("p");
  const dateSpan = document.createElement("span");
  const teamDiv = document.createElement("div");
  const tagsDiv = document.createElement("div");
  const progressDiv = document.createElement("div");
  const progress = document.createElement("progress");
  const priceSpan = document.createElement("span");
  const priceIcon = document.createElement("i");

  // Add Classes and Attributes to Elements
  article.classList.add("project");
  titleDiv.classList.add("title");
  dateSpan.classList.add("date");
  teamDiv.classList.add("team-members");
  tagsDiv.classList.add("tags");
  progressDiv.classList.add("row");
  progress.classList.add("progress");
  progress.setAttribute("max", "100");
  priceIcon.classList.add("fa-solid", "fa-dollar-sign");

  // Set progress bar class based on project progress
  if (project.progress == 100) {
    progress.classList.add("bg-blue");
  } else if (project.progress >= 75) {
    progress.classList.add("bg-green");
  } else {
    progress.classList.add("bg-red");
  }

  // Add Text Content to Elements
  titleH3.textContent = project.title;
  titleP.textContent = project.paragraph;
  dateSpan.textContent = project.date;
  progress.setAttribute("value", project.progress);
  priceSpan.textContent = project.price;

  // Append Elements to HTML
  article.appendChild(titleDiv);
  article.appendChild(teamDiv);
  article.appendChild(tagsDiv);
  article.appendChild(progressDiv);
  titleDiv.appendChild(titleH3);
  titleDiv.appendChild(titleP);
  titleDiv.appendChild(dateSpan);
  teamDiv.innerHTML = team;
  tagsDiv.innerHTML = tags;
  progressDiv.appendChild(progress);
  progressDiv.appendChild(priceSpan);
  priceSpan.appendChild(priceIcon);

  document.querySelector(".grid").appendChild(article);
}

// Loop through projects array and call addToGrid function for each project
projects.forEach((project) => {
  appendElementToGrid(project);
});
s;
