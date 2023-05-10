// Data
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
projects.forEach((project) => {
  // Turn Arrays (team, tags) Into HTML String
  let team = project.team
      .map((member) => `<img src="assets/images/team-members/${member}.png">`)
      .reduce((acc, cur) => acc + cur),
    tags = project.tags
      .map((tag) => `<span class="noevent-btn">${tag}</span>`)
      .reduce((acc, cur) => acc + cur);
  // Add Data To HTML (article)
  let article = `
    <article>
      <div class="title">
        <h3>${project.title}</h3>
        <p>${project.paragraph}</p>
        <span>${project.date}</span>
      </div>
      <div class="team-members">
        ${team}
      </div>
      <div class="tags">
        ${tags}
      </div>
      <div class="row">
        <progress class="progress bg-${
          project.progress == 100
            ? "blue"
            : project.progress >= 75
            ? "green"
            : "red"
        }" value="${project.progress}" max="100"></progress>
        <span>
          <i class="fa-solid fa-dollar-sign"></i>
          ${project.price}
        </span>
      </div>
    </article>
  `;
  // Add Article To (.grid)
  document.querySelector(".grid").innerHTML += article;
});
