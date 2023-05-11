// Every Single Line Has Been Written With Chat-GPT
const courses = [
  {
    coverSrc: "assets/images/courses/course-01.jpg",
    avatarSrc: "assets/images/team-members/team-1.png",
    courseTitle: "Mastering Web Design",
    courseDesc:
      "Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture",
    userCount: "950",
    price: "165",
  },
  {
    coverSrc: "assets/images/courses/course-02.jpg",
    avatarSrc: "assets/images/team-members/team-2.png",
    courseTitle: "Data Structure And Algorithms",
    courseDesc:
      "Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering",
    userCount: "1150",
    price: "210",
  },
  {
    coverSrc: "assets/images/courses/course-03.jpg",
    avatarSrc: "assets/images/team-members/team-3.png",
    courseTitle: "Responsive Web Design",
    courseDesc:
      "Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints",
    userCount: "650",
    price: "90",
  },
  {
    coverSrc: "assets/images/courses/course-04.jpg",
    avatarSrc: "assets/images/team-members/team-4.png",
    courseTitle: "Mastering Python",
    courseDesc:
      "Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life",
    userCount: "950",
    price: "250",
  },
  {
    coverSrc: "assets/images/courses/course-05.jpg",
    avatarSrc: "assets/images/team-members/team-1.png",
    courseTitle: "PHP Examples",
    courseDesc:
      "PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases",
    userCount: "850",
    price: "150",
  },
  {
    coverSrc: "assets/images/courses/course-01.jpg",
    avatarSrc: "assets/images/team-members/team-2.png",
    courseTitle: "Data Structure And Algorithms",
    courseDesc:
      "Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering",
    userCount: "1150",
    price: "210",
  },
  {
    coverSrc: "assets/images/courses/course-02.jpg",
    avatarSrc: "assets/images/team-members/team-3.png",
    courseTitle: "Responsive Web Design",
    courseDesc:
      "Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints",
    userCount: "650",
    price: "90",
  },
  {
    coverSrc: "assets/images/courses/course-03.jpg",
    avatarSrc: "assets/images/team-members/team-4.png",
    courseTitle: "Mastering Web Design",
    courseDesc:
      "Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Archticture",
    userCount: "850",
    price: "145",
  },
  {
    coverSrc: "assets/images/courses/course-04.jpg",
    avatarSrc: "assets/images/team-members/team-1.png",
    courseTitle: "PHP Examples",
    courseDesc:
      "PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases",
    userCount: "850",
    price: "150",
  },
  {
    coverSrc: "assets/images/courses/course-05.jpg",
    avatarSrc: "assets/images/team-members/team-2.png",
    courseTitle: "Mastering Python",
    courseDesc:
      "Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life",
    userCount: "950",
    price: "250",
  },
];

function appendElementToGrid(
  coverSrc,
  coverAlt,
  avatarSrc,
  avatarAlt,
  courseTitle,
  courseDesc,
  userCount,
  price
) {
  // create the HTML elements
  const article = document.createElement("article");
  const coverImg = document.createElement("img");
  const avatarImg = document.createElement("img");
  const titleDiv = document.createElement("div");
  const titleHeader = document.createElement("h3");
  const descPara = document.createElement("p");
  const infoBtn = document.createElement("span");
  const rowDiv = document.createElement("div");
  const span1 = document.createElement("span");
  const userIcon = document.createElement("i");
  const span2 = document.createElement("span");
  const dollarIcon = document.createElement("i");

  // set the attributes and text content of the HTML elements
  article.classList.add("course");
  coverImg.src = coverSrc;
  coverImg.alt = coverAlt; // add alt attribute for cover image
  coverImg.classList.add("cover");
  avatarImg.src = avatarSrc;
  avatarImg.alt = avatarAlt; // add alt attribute for avatar image
  avatarImg.classList.add("avatar");
  titleDiv.classList.add("title");
  titleHeader.textContent = courseTitle;
  descPara.textContent = courseDesc;
  infoBtn.classList.add("noevent-btn", "bg-blue");
  infoBtn.textContent = "Course Info";
  rowDiv.classList.add("row");
  userIcon.classList.add("fa-regular", "fa-user");
  span1.appendChild(userIcon);
  span1.appendChild(document.createTextNode(` ${userCount}`));
  dollarIcon.classList.add("fa-solid", "fa-dollar-sign");
  span2.appendChild(dollarIcon);
  span2.appendChild(document.createTextNode(` ${price}`));

  // append the HTML elements to the article element
  titleDiv.appendChild(titleHeader);
  titleDiv.appendChild(descPara);
  article.appendChild(coverImg);
  article.appendChild(avatarImg);
  article.appendChild(titleDiv);
  article.appendChild(infoBtn);
  rowDiv.appendChild(span1);
  rowDiv.appendChild(span2);
  article.appendChild(rowDiv);

  // append the article element to the grid element
  document.querySelector(".grid").appendChild(article);
}

courses.forEach((course) => {
  appendElementToGrid(
    course.coverSrc,
    `${course.courseTitle} cover image`, // set cover image alt text
    course.avatarSrc,
    `${course.courseTitle} instructor avatar`, // set avatar image alt text
    course.courseTitle,
    course.courseDesc,
    course.userCount,
    course.price
  );
});
