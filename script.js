function checkBudget() {
  const allowance = Number(document.getElementById("allowance").value);
  const expenses = Number(document.getElementById("expenses").value);
  const result = document.getElementById("result");

  if (expenses > allowance) {
    result.textContent = "Abaw gastador!";
  } else {
    result.textContent = "Mayu mag-budget ah!";
  }
}
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then(() => console.log("Service Worker Registered"));
}