// 5. Responsive Posts (3p)
// Ladda ner posts från denna url: https://jsonplaceholder.typicode.com/posts
// För varje post ska title och body placeras under varandra.
// I desktop-vy ska posts visas i 3 kolumner.
// I mobil-vy ska posts visas i en kolumn med 100% width.
const postsBox = document.getElementById("posts");

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  data.forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.setAttribute("class", "postDiv");
    postsBox.appendChild(postDiv);

    const title = document.createElement("h3");
    const body = document.createElement("p");

    title.textContent = `${post.title}`;
    body.textContent = `${post.body}`;

    postDiv.appendChild(title);
    postDiv.appendChild(body);
  });
}

getPosts();
