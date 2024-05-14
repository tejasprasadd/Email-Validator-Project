console.log("This is my Script");

submitBtn.addEventListener("click", async (e) => {
  console.log("click");
  e.preventDefault();
  resultCont.innerHTML=`<img  width=120px src="loading.svg" alt="" srcset="">`
  let key = "ema_live_aSAHoFOzttvc8iEy5HtMUqaK0fvgzEDJA56wEWi1";
  let email = document.getElementById("username").value;
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  let res = await fetch(url);
  let result = await res.json();
  let str = '';
  for (key of Object.keys(result)) {
    if(result[key]!="" && result[key]!==" " ){
    str = str + `<div> ${key} : ${result[key]}</div> `;
    }
  }
  console.log(str);
  resultCont.innerHTML = str;
});

let result = {
  tag: "",
  free: true,
  role: false,
  user: "tejasrasdsds123",
  email: "tejasrasdsds123@gmail.com",
  score: 0.48,
  state: "undeliverable",
  domain: "gmail.com",
  reason: "invalid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: false,
  did_you_mean: "",
  format_valid: true,
};
