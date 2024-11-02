async function SaveTweet() {
  try {
    const descInput = document.querySelector("textarea.desc");
    const imageURLInput = document.querySelector("input.img");

    const description = descInput.value;
    const imageURL = imageURLInput.value;

    const res = await fetch(
      "https://p2pclouds.up.railway.app/v1/learn/tweet/save",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tweetImage: imageURL,
          tweetDescription: description,
        }),
      }
    );

    console.log(res.ok);

    if (!res.ok) {
      throw { message: "Request Failed" };
    }
    const serverResponse = await res.json();
    console.log(serverResponse);
  } catch (err) {
    console.log(err);
  }
}

async function DeleteTweet() {
  try {
    const tweetInput = document.querySelector("input.tweetId");

    const tweetId = tweetInput.value;

    const res = await fetch(
      `https://p2pclouds.up.railway.app/v1/learn/tweet/delete?tweetId=${tweetId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(res.ok);

    if (!res.ok) {
      throw { message: "Request Failed" };
    }
    const serverResponse = await res.json();
    console.log(serverResponse);
  } catch (err) {
    console.log(err);
  }
}

console.log("Hi there");
setTimeout(() => console.log("Sorry I'm late"), 3);
setTimeout(() => console.log(add(4, 5)), 0);
function add(x, y) {
  return x + y;
}
