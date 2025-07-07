// const form = document.querySelector(".top-banner form");
// const input = document.querySelector(".top-banner input");
// const message = document.querySelector(".top-banner .message");
// const list = document.querySelector(".ajax-section .cities");

// const apiKey = "edc228562ac0a8aa3116d41c0687cf56";

// form.addEventListener("submit", e => {
//     e.preventDefault();
//     let inputVal = input.value;
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
//     fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         const { main, name, sys, weather } = data;
//         const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
//         const li = document.createAttribute("li");
//         li.classList.add("city");
//         const markup = `
//         <h2 class='city-name' data-name=${name},${sys.country}>
//                 <span>${name}</span>
//                 <span>${sys.country}</span>
//             </h2>
//             <div class='city-temp'>${Math.round(main.temp)}</div>
//             <figure>
//                 <img class='city-icon' src='${icon}' alt ='city' >
//                 <figurecaption>${weather[0]["description"]}</figurecaption>
//             </figure>
//             `;
//             li.innerHTML = markup;
//             list.appendChild(li);
//     })
//     .catch(() => {
//         message.innerText = "Search for a valid city.";
//     })
//   input.value = "";
// })

// `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`
// api.openweathermap.org/data/2.5/weather?q=tehran&appid=edc228562ac0a8aa3116d41c0687cf56&units=metric

const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .message");
const list = document.querySelector(".ajax-section .cities");

const apiKey = "edc228562ac0a8aa3116d41c0687cf56";

form.addEventListener("submit", e => {
    e.preventDefault();
    let inputVal = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const { main, name, sys, weather } = data;
            const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
            const li = document.createElement("li");
            li.classList.add("city");
            const markup = `
            <h2 class='city-name' data-name=${name},${sys.country}>
                <span>${name}</span>
                <span>${sys.country}</span>
            </h2>
            <div class='city-temp'>${Math.round(main.temp)}</div>
            <figure>
              <img class='city-icon' src='${icon}' alt='${name} weather'>
              <figcaption>${weather[0]["description"]}</figcaption>
            </figure>
            `;
            li.innerHTML = markup;
            list.appendChild(li);
            message.innerText = ""
        })
        .catch(() => {
            message.innerText = "Search for a valid city"
        })
    input.value = ""
})

