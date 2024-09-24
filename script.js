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
// noakhali
document
  .getElementById("noakhali_donation")
  .addEventListener("click", function () {
    let oldAmount_noakhali = document.getElementById(
      "recivedAmount_noakhali"
    ).innerText;
    oldAmount_noakhali = parseFloat(oldAmount_noakhali);
    const donate_for_noakhai = inputNumber("donate_for_noakhai");
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
  });
// feni
document
  .getElementById("donate_btn_feni")
  .addEventListener("click", function () {
    const recivedAmount_feni = targetId("recivedAmount_feni");
    const donate_for_feni = inputNumber("donate_for_feni");
    const give_value = inputNumber("give_value");
    const count = targetId("count");
    const date = new Date();
    const total_donation_feni = recivedAmount_feni + donate_for_feni;

    document.getElementById(
      "recivedAmount_feni"
    ).innerText = `${total_donation_feni}`;

    document.getElementById("give_value").innerText = `${donate_for_feni}`;

    document.getElementById("count").innerText = `${count - donate_for_feni}`;

    const div = document.createElement("div");
    div.classList.add(
      "border-2",
      "border-[text-[#111111B3]",
      "my-3",
      "rounded-lg",
      "p-4",
      "shadow-md"
    );
    div.innerHTML = `
    <h1 id="title_feni" class = "text-xl font-bold">${donate_for_feni} Taka is Donated for Flood Relief in Feni,Bangladesh
    </h1>
    
    <p id ="date" class="text-[#111111B3] text-sm">${date}<p>
    `;
    document.getElementById("append_here").appendChild(div);
    document.getElementById("donate_for_feni").value = "";
  });
// quota
document.getElementById("quota_btn").addEventListener("click", function () {
  const recivedAmount = targetId("recivedAmount");
  const donate_for_quota = inputNumber("donate_for_quota");
  const date = new Date();
  const total_amount_quota = recivedAmount + donate_for_quota;
  const give_value = targetId("give_value");
  document.getElementById("give_value").innerText = `${donate_for_quota}`;
  document.getElementById("recivedAmount").innerText = `${total_amount_quota}`;

  const div = document.createElement("div");
  div.classList.add(
    "border-2",
    "border-[text-[#111111B3]",
    "my-3",
    "rounded-lg",
    "p-4",
    "shadow-md"
  );
  div.innerHTML = `
  <h1 id="title_feni" class = "text-xl font-bold">${donate_for_quota} Taka is Donated for Aid for Injured in the Quota Movement
  </h1>
  
  <p id ="date" class="text-[#111111B3] text-sm">${date}<p>
  `;
  document.getElementById("append_here").appendChild(div);
  document.getElementById("donate_for_quota").value = "";
});
