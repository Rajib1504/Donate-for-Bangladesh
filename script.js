// functions
function inputNumber(id) {
  const value = document.getElementById(id).value;
  const num = parseFloat(value);
  return num;
}
function targetId(id) {
  const innertxt = document.getElementById(id).innerText;
  const num = parseFloat(innertxt);
}
// history btn
document.getElementById("history").addEventListener("click", function () {
  const history_details = document.getElementById("history_details");
  const donation_form = document.getElementById("donation_form");
  const history = document.getElementById("history");
  const donation = document.getElementById("donation");

  window.location.href = "#history_details";
  history_details.classList.remove("hidden");
  donation_form.classList.add("hidden");
  history.classList.add("bg-[#B4F461]", "border-[#B4F461]", "text-black");
  donation.classList.add("text-[#111111B3]", "border-gray-400");
  donation.classList.remove("bg-[#B4F461]", "border-[#B4F461]");
});
document.getElementById("donation").addEventListener("click", function () {
  const history_details = document.getElementById("history_details");
  const donation_form = document.getElementById("donation_form");
  const history = document.getElementById("history");
  // donation btn
  const donation = document.getElementById("donation");

  window.location.href = "#donation_form";
  history_details.classList.add("hidden");
  donation_form.classList.remove("hidden");
  donation.classList.add("bg-[#B4F461]", "border-[#B4F461]", "text-black");
  history.classList.add("text-[#111111B3]", "border-gray-400");
  history.classList.remove("bg-[#B4F461]", "border-[#B4F461]");
});
// input works from noakhali
document
  .getElementById("noakhali_donation")
  .addEventListener("click", function (event) {
    event.preventDefault();
    //     getting value
    const popup = document.getElementById("give_value").innerText;
    console.log(popup);
    const donate_for_noakhai = inputNumber("donate_for_noakhai");
  });
