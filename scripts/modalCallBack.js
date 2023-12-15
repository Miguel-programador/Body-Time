document.addEventListener("DOMContentLoaded", function () {
  const openModalBtn = document.getElementById("modalCallBack");
  const modal = document.createElement("div");

  modal.classList.add("modalCallBack");
  modal.innerHTML = `
  <div class="modalCallBack-content" style="padding: 15px; margin-top: 50px;">
  <span class="close" id="closeModalBtn">&times;</span>
  <h2 style="color: #363431; text-align: center; font-size: 20px; font-weight: 400; margin-bottom: 25px;">Обратный звонок</h2>

  <label for="text">
      <input id="text" type="text" placeholder="Введите текст" style="text-align: center; margin-bottom: 15px; width: 100%;" />
  </label>

  <label for="tel">
      <input id="tel" type="tel" placeholder="Введите телефон" style="text-align: center; margin-bottom: 15px; width: 100%;" />
  </label>

  <label for="privacyPolicy">
      <input style="text-align: center; color: #363431; font-size: 15px; font-weight: 400;" id="privacyPolicy" type="checkbox" required />
      Заполняя форму на сайте, Вы соглашаетесь с нашей <a href="link-to-privacy-policy" target="_blank">Политикой конфиденциальности</a>
  </label>

  <button style="text-align: center; width: 100%; margin-top: 25px;" id="submitBtn" class="btnCallBack">Заказать звонок</button>
</div>

   `;
  document.body.appendChild(modal);

  const closeModalBtn = document.getElementById("closeModalBtn");
  const submitBtn = document.getElementById("submitBtn");

  openModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
  });

  closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  submitBtn.addEventListener("click", function () {
    const textValue = document.getElementById("text").value;
    const telValue = document.getElementById("tel").value;
    const privacyPolicyChecked =
      document.getElementById("privacyPolicy").checked;

    if (privacyPolicyChecked) {
      // Отправить данные (textValue, telValue) на сервер, используя AJAX или другие методы.

      // Сбросить форму
      document.getElementById("text").value = "";
      document.getElementById("tel").value = "";
      document.getElementById("privacyPolicy").checked = false;

      // Закрыть модальное окно
      modal.style.display = "none";
    } else {
      alert(
        "Пожалуйста, отметьте чекбокс согласия с Политикой конфиденциальности."
      );
    }
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
