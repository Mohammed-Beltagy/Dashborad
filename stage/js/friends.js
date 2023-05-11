// Every Single Line Has Been Written With Chat-GPT
const friends = [
  {
    avatar: "assets/images/friends/friend-01.jpg",
    name: "Ahmed Nasser",
    jobTitle: "JavaScript Developer",
    friendsCount: 99,
    projectsCount: 15,
    articlesCount: 25,
    joinDate: "02/10/2021",
    isVIP: true,
  },
  {
    avatar: "assets/images/friends/friend-02.jpg",
    name: "Omar Fathy",
    jobTitle: "Cloud Developer",
    friendsCount: 30,
    projectsCount: 11,
    articlesCount: 12,
    joinDate: "02/08/2020",
    isVIP: false,
  },
  {
    avatar: "assets/images/friends/friend-03.jpg",
    name: "Omar Ahmed",
    jobTitle: "Mobile Developer",
    friendsCount: 80,
    projectsCount: 20,
    articlesCount: 18,
    joinDate: "02/06/2020",
    isVIP: false,
  },
  {
    avatar: "assets/images/friends/friend-04.jpg",
    name: "Shady Nabil",
    jobTitle: "Back-End Developer",
    friendsCount: 70,
    projectsCount: 30,
    articlesCount: 18,
    joinDate: "28/06/2020",
    isVIP: false,
  },
  {
    avatar: "assets/images/friends/friend-05.jpg",
    name: "Mohamed Ibrahim",
    jobTitle: "Algorithm Developer",
    friendsCount: 80,
    projectsCount: 30,
    articlesCount: 18,
    joinDate: "28/08/2020",
    isVIP: false,
  },
  {
    avatar: "assets/images/friends/friend-01.jpg",
    name: "Amr Hendawy",
    jobTitle: "Back-End Developer",
    friendsCount: 70,
    projectsCount: 30,
    articlesCount: 18,
    joinDate: "28/06/2020",
    isVIP: false,
  },
  {
    avatar: "assets/images/friends/friend-02.jpg",
    name: "Mahmoud Adel",
    jobTitle: "Cloud Developer",
    friendsCount: 30,
    projectsCount: 11,
    articlesCount: 12,
    joinDate: "02/08/2020",
    isVIP: false,
  },
  {
    avatar: "assets/images/friends/friend-03.jpg",
    name: "Ahmed Abuzaid",
    jobTitle: "Content Creator",
    friendsCount: 80,
    projectsCount: 30,
    articlesCount: 18,
    joinDate: "28/08/2020",
    isVIP: true,
  },
  {
    avatar: "assets/images/friends/friend-04.jpg",
    name: "Gareeb Elshiekh",
    jobTitle: "JavaScript Developer",
    friendsCount: 90,
    projectsCount: 15,
    articlesCount: 25,
    joinDate: "02/10/2020",
    isVIP: true,
  },
  {
    avatar: "assets/images/friends/friend-05.jpg",
    name: "Hamza",
    jobTitle: "Front-End Developer",
    friendsCount: 80,
    projectsCount: 20,
    articlesCount: 18,
    joinDate: "02/06/2020",
    isVIP: false,
  },
];

function appendElementToGrid(
  imageUrl,
  name,
  jobTitle,
  numFriends,
  numProjects,
  numArticles,
  joinDate,
  isVIP
) {
  const friendElement = document.createElement("article");

  if (isVIP) {
    friendElement.classList.add("vip");
  }

  const buttonsElement = document.createElement("div");
  buttonsElement.classList.add("buttons");

  const phoneIconElement = document.createElement("i");
  phoneIconElement.classList.add("fa-solid", "fa-phone");
  buttonsElement.appendChild(phoneIconElement);

  const envelopeIconElement = document.createElement("i");
  envelopeIconElement.classList.add("fa-regular", "fa-envelope");
  buttonsElement.appendChild(envelopeIconElement);

  friendElement.appendChild(buttonsElement);

  const titleElement = document.createElement("div");
  titleElement.classList.add("row", "title");

  const avatarElement = document.createElement("img");
  avatarElement.setAttribute("src", imageUrl);
  avatarElement.setAttribute("alt", `${name}'s profile picture`);
  titleElement.appendChild(avatarElement);

  const nameElement = document.createElement("h4");
  nameElement.textContent = name;
  titleElement.appendChild(nameElement);

  const jobTitleElement = document.createElement("span");
  jobTitleElement.textContent = jobTitle;
  titleElement.appendChild(jobTitleElement);

  friendElement.appendChild(titleElement);

  const infoElement = document.createElement("div");
  infoElement.classList.add("row");

  const friendsElement = document.createElement("span");
  friendsElement.innerHTML = `<i class="fa-regular fa-face-smile"></i> ${numFriends} Friends`;
  infoElement.appendChild(friendsElement);

  const projectsElement = document.createElement("span");
  projectsElement.innerHTML = `<i class="fa-solid fa-code-commit"></i> ${numProjects} Projects`;
  infoElement.appendChild(projectsElement);

  const articlesElement = document.createElement("span");
  articlesElement.innerHTML = `<i class="fa-regular fa-newspaper"></i> ${numArticles} Articles`;
  infoElement.appendChild(articlesElement);

  friendElement.appendChild(infoElement);

  const lastRow = document.createElement("div");
  lastRow.classList.add("row");
  friendElement.appendChild(lastRow);

  const joinedDateElement = document.createElement("span");
  joinedDateElement.textContent = `Joined ${joinDate}`;
  lastRow.appendChild(joinedDateElement);

  const linksElement = document.createElement("div");
  linksElement.classList.add("links");

  const profileLinkElement = document.createElement("a");
  profileLinkElement.classList.add("profile", "btn", "bg-blue");
  profileLinkElement.setAttribute("href", "profile.html");
  profileLinkElement.textContent = "Profile";
  linksElement.appendChild(profileLinkElement);

  const removeLinkElement = document.createElement("a");
  removeLinkElement.classList.add("remove", "btn", "bg-red");
  removeLinkElement.setAttribute("href", "#");
  removeLinkElement.textContent = "Remove";
  linksElement.appendChild(removeLinkElement);

  lastRow.appendChild(linksElement);

  const gridElement = document.querySelector(".grid");
  gridElement.appendChild(friendElement);
}

friends.forEach((friend) => {
  appendElementToGrid(
    friend.avatar,
    friend.name,
    friend.jobTitle,
    friend.friendsCount,
    friend.projectsCount,
    friend.articlesCount,
    friend.joinDate,
    friend.isVIP
  );
});
