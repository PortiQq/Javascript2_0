(function () {
  const example = document.getElementById("example");
  const cw1 = document.getElementById("cw1");
  const cw2 = document.getElementById("cw2");
  const cw3 = document.getElementById("cw3");
  const answer = document.getElementById("answer");

  let postId = 1;

  example.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        console.log(array);
        answer.innerHTML = JSON.stringify(array);
      });
  });

  cw1.addEventListener("click", function () {
    answer.innerHTML = "Loading...";
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((post) => {
        let html = `<li><strong>${post.title}</strong><br>${post.body}</li>`;
        answer.innerHTML = html;
        postId++;
      });
  });

  f1_submit.addEventListener("click", function () {
    answer.innerHTML = "Processing...";
    let title = f1_title.value;
    let body = f1_body.value;
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((post) => {
        let html = `<p>Dodano post o ID: ${post.id}</p>`;
        html += `<li><strong>${post.title}</strong><br>${post.body}</li>`;
        answer.innerHTML = html;
      });
  });

  cw2.addEventListener("click", function () {
    //TODO
  });

  cw3.addEventListener("click", function () {
    //TODO
  });
})();
