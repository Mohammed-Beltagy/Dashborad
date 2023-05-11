const files = [
  {
    type: "avi",
    name: "video-file.avi",
    author: "John Doe",
    date: "01/01/2022",
    size: "42.5MB",
  },
  {
    type: "dll",
    name: "app-dll.dll",
    author: "Jane Smith",
    date: "02/01/2022",
    size: "1.2MB",
  },
  {
    type: "eps",
    name: "vector-image.eps",
    author: "Bob Johnson",
    date: "03/01/2022",
    size: "3.8MB",
  },
  {
    type: "pdf",
    name: "document.pdf",
    author: "Alice Williams",
    date: "04/01/2022",
    size: "2.5MB",
  },
  {
    type: "psd",
    name: "photoshop-file.psd",
    author: "Mark Davis",
    date: "05/01/2022",
    size: "15.3MB",
  },
  {
    type: "zip",
    name: "compressed-files.zip",
    author: "Karen Lee",
    date: "06/01/2022",
    size: "7.1MB",
  },
  {
    type: "avi",
    name: "video-file2.avi",
    author: "John Doe",
    date: "07/01/2022",
    size: "32.6MB",
  },
  {
    type: "dll",
    name: "app-dll2.dll",
    author: "Jane Smith",
    date: "08/01/2022",
    size: "0.9MB",
  },
  {
    type: "eps",
    name: "vector-image2.eps",
    author: "Bob Johnson",
    date: "09/01/2022",
    size: "4.2MB",
  },
  {
    type: "pdf",
    name: "document2.pdf",
    author: "Alice Williams",
    date: "10/01/2022",
    size: "1.8MB",
  },
  {
    type: "psd",
    name: "photoshop-file2.psd",
    author: "Mark Davis",
    date: "11/01/2022",
    size: "18.9MB",
  },
  {
    type: "zip",
    name: "compressed-files2.zip",
    author: "Karen Lee",
    date: "12/01/2022",
    size: "5.6MB",
  },
  {
    type: "avi",
    name: "video-file3.avi",
    author: "John Doe",
    date: "13/01/2022",
    size: "28.9MB",
  },
  {
    type: "dll",
    name: "app-dll3.dll",
    author: "Jane Smith",
    date: "14/01/2022",
    size: "1.6MB",
  },
  {
    type: "eps",
    name: "vector-image3.eps",
    author: "Bob Johnson",
    date: "15/01/2022",
    size: "3.3MB",
  },
  {
    type: "pdf",
    name: "document3.pdf",
    author: "Alice Williams",
    date: "16/01/2022",
    size: "3.1MB",
  },
  {
    type: "psd",
    name: "photoshop-file3.psd",
    author: "Mark Davis",
    date: "17/01/2022",
    size: "12.8MB",
  },
  {
    type: "zip",
    name: "compressed-files3.zip",
    author: "Karen Lee",
    date: "18/01/2022",
    size: "9.4MB",
  },
  {
    type: "avi",
    name: "video-file4.avi",
    author: "John Doe",
    date: "19/01/2022",
    size: "35.7MB",
  },
  {
    type: "dll",
    name: "app-dll4.dll",
    author: "Jane Smith",
    date: "20/01/2022",
    size: "1.4MB",
  },
  {
    type: "eps",
    name: "vector-image4.eps",
    author: "Bob Johnson",
    date: "21/01/2022",
    size: "4.5MB",
  },
  {
    type: "pdf",
    name: "document4.pdf",
    author: "Alice Williams",
    date: "22/01/2022",
    size: "2.2MB",
  },
  {
    type: "psd",
    name: "photoshop-file4.psd",
    author: "Mark Davis",
    date: "23/01/2022",
    size: "10.5MB",
  },
  {
    type: "zip",
    name: "compressed-files4.zip",
    author: "Karen Lee",
    date: "24/01/2022",
    size: "6.8MB",
  },
];

function appendElementToGrid(type, name, author, date, size) {
  // Create the HTML elements
  const articleEl = document.createElement("article");
  const iconEl = document.createElement("i");
  const imgEl = document.createElement("img");
  const h3El = document.createElement("h3");
  const spanNameEl = document.createElement("span");
  const rowEl = document.createElement("div");
  const spanDateEl = document.createElement("span");
  const spanSizeEl = document.createElement("span");

  // Set the classes and attributes of the elements
  articleEl.classList.add("file");
  iconEl.classList.add("fa-solid", "fa-download");
  imgEl.setAttribute("src", `assets/images/files/${type}.svg`);
  imgEl.setAttribute("alt", `${name} file`);
  h3El.textContent = name;
  spanNameEl.classList.add("name");
  spanNameEl.textContent = author;
  rowEl.classList.add("row");
  spanDateEl.textContent = date;
  spanSizeEl.textContent = size;

  // Append the elements to the article element
  articleEl.appendChild(iconEl);
  articleEl.appendChild(imgEl);
  articleEl.appendChild(h3El);
  articleEl.appendChild(spanNameEl);
  articleEl.appendChild(rowEl);
  rowEl.appendChild(spanDateEl);
  rowEl.appendChild(spanSizeEl);

  // Append the article element to the .files-grid element
  const gridEl = document.querySelector(".files-grid");
  gridEl.appendChild(articleEl);
}

// Reverse the order of the files array
files.reverse();

// Loop through the files array and append each file to the .files-grid element
files.forEach((file) => {
  // Call the appendElementToGrid function with the file data
  appendElementToGrid(
    file.type,
    file.name,
    file.author,
    file.date,
    file.size,
    file.author
  );
});
