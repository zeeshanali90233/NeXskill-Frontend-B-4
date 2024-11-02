// GEO LOCATION API

function getUserGeoLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (location) => {
        console.log(location.coords.latitude);
        console.log(location.coords.longitude);
      },
      (error) => {
        console.log(error.message);
      }
    );
  } else {
    alert("Browser location not supported.");
  }
}

let localStream;

async function getUserMedia() {
  if (navigator.getUserMedia) {
    const videoRef = document.querySelector(".cam");
    const res = await navigator.getUserMedia(
      {
        audio: true,
        video: { width: 200, height: 200 },
      },
      (stream) => {
        window.localStream = stream;
        videoRef.srcObject = stream;
      },
      (err) => {
        console.error(`The following error occurred: ${err.name}`);
      }
    );
  } else {
    alert("Browser location not supported.");
  }
}

// getUserGeoLocation();
getUserMedia();

async function getWeather() {
  const inputRef = document.querySelector(".cityName");
  const resultDiv = document.querySelector(".result");
  try {
    const res = await fetch(
      `https://p2pclouds.up.railway.app/v1/learn/weather?city=${inputRef.value}`,
      {
        method: "GET",
      }
    );
    const weather = await res.json();
    resultDiv.innerHTML = `
      <div>
        <p>Celcius: ${weather.current.temp_c}</p>
      </div>
      <div>
        <p>Fahrenhiet: ${weather.current.temp_f}</p>
      </div>
    `;
  } catch (err) {
    console.log(err);
    alert("Failed to fetch");
  }
}

const canvasRef = document.getElementById("myCanvas");
var ctx = canvasRef.getContext("2d");
ctx.beginPath();
ctx.arc(50, 10, 10, 0, Math.PI);
ctx.stroke();

function stopVideo() {
  const videoRef = document.querySelector(".cam");
  videoRef.srcObject.getTracks().forEach((track) => track.stop());
  videoRef.style.display = "none";
}

function startVideo() {
  const videoRef = document.querySelector(".cam");
  videoRef.play();
}
