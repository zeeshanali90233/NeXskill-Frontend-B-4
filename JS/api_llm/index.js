async function getTweets() {
  try {
    //   fetch("https://p2pclouds.up.railway.app/v1/learn/get_instagram_posts")
    //     .then((data) => {
    //       return data.json();
    //     })
    //     .then((data) => {
    //       console.log(data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    const res = await fetch(
      "https://p2pclouds.up.railay.app/v1/learn/get_instagram_posts"
    );
    const data = await res.json();
    const tweets = data["tweets"];

    //   Adding Dynamic Elements to Dom
    const container = document.querySelector(".tweets_container");

    for (let i = 0; i < tweets.length; i++) {
      const indivitualTweet = tweets[i];
      //   New Element
      const newDiv = document.createElement("div");
      newDiv.innerHTML = `
     <div>
        <h3>${indivitualTweet.tweetId}</h3>
        <h4>${indivitualTweet.tweetDescription}</h4>
        <img src="https://p2pclouds.org/wp-content/uploads/2024/03/cropped-clouds_p2p-logo.png" width="20" height="20"></img>
      </div>
    `;
      //   Adding it to dom
      container.appendChild(newDiv);
    }
  } catch (err) {
    const container = document.querySelector(".tweets_container");
    const newH4 = document.createElement("h4");
    newH4.innerText = "Errro wwhile fetchig, check your intetrne ";
    container.appendChild(newH4);
    alert("Error while fetching");
  }
}

// getTweets();

const qna = [];

async function getResponseFromLLM() {
  try {
    const container = document.querySelector(".llm");

    const inputRef = document.querySelector("input.userQuery");
    const query = inputRef.value;
    // Clear Input
    inputRef.value = "";

    // Pushing Question
    const qDiv = document.createElement("div");
    qDiv.innerHTML = `
    <p>${query}</p>
    `;
    container.appendChild(qDiv);

    const apiBody = {
      contents: [
        {
          parts: [
            {
              text: `Context: ${qna}`, // Use Q&A pairs or previous context here to guide memory recall
            },
            {
              text: `
                You are an Expert Medical Consultant. 
                1. Only respond to medical-related queries with professional advice.
                2. Refer to the past context provided to answer previous questions if they are asked again, including related follow-ups.
                3. If a query is unrelated to medical advice, politely excuse yourself.
                `,
            },
            {
              text: `User query: ${query}`, // Placing the new user query here for real-time context.
            },
          ],
        },
      ],
    };

    const res = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=<GEMINI_API_KEY>",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiBody),
      }
    );

    const data = await res.json();
    const responseText = data["candidates"][0].content["parts"][0].text;

    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <p>${responseText}</p>
    `;
    container.appendChild(newDiv);

    // Pushing to QNA Array
    qna.push({
      Question: query,
      LLMResponse: responseText,
    });

    document.documentElement.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  } catch (err) {
    console.log(err);
    alert("Error while generating response");
  }
}
