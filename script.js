function inputNumber(id) {
  const value = document.getElementById(id).value;
  const num = parseFloat(value);
  return num;
}
function targetId(id) {
  const target = document.getElementById(id).innerText;
  const n = parseFloat(target);
  return n;
}
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
document
  .getElementById("noakhali_donation")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let oldAmount_noakhali = document.getElementById(
      "recivedAmount_noakhali"
    ).innerText;
    oldAmount_noakhali = parseFloat(oldAmount_noakhali);
    console.log(oldAmount_noakhali);
    const donate_for_noakhai = inputNumber("donate_for_noakhai");
    console.log(donate_for_noakhai);
    const total_donation_noakhali = oldAmount_noakhali + donate_for_noakhai;
    const donate_for_noakhali = inputNumber("donate_for_noakhai");
    const pop_up = targetId("give_value");
    const count = targetId("count");
    const noakhali_new_donation = (document.getElementById(
      "recivedAmount_noakhali"
    ).innerText = `${total_donation_noakhali}`);

    document.getElementById("give_value").innerText = `${donate_for_noakhali}`;
    document.getElementById("count").innerText = `${
      count - donate_for_noakhali
    }`;
    const date = new Date();
    const div = document.createElement("div");
    div.classList.add(
      "border-2",
      "border-[text-[#111111B3]",
      "my-3",
      "rounded-lg",
      "p-4",
      "shadow-md"
    );
    div.innerHTML = `<h1 id="title" class=" text-xl font-bold">${donate_for_noakhai}Taka is Donated for Flood at Noakhali, Bangladesh</h1>
    <p id ="date" class="text-[#111111B3] text-sm">${date}</p>
    `;
    document.getElementById("append_here").appendChild(div);

    document.getElementById("donate_for_noakhai").value = "";
    // document.getElementById("noakhali_donation").value = "";
    // document.getElementById("give_value").innerText = "";
  });
