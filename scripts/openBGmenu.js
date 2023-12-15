document.addEventListener("DOMContentLoaded", function () {
  const openModalBtn = document.getElementById("burgerButton");

  const modal = document.createElement("div");
  modal.classList.add("burger-modal");
  modal.innerHTML = `
     <div class="bg-modal-content">
       <span class="close" id="closeBurgerModal">&times;</span>
       <ul>
         <li>Наши услуги</li>
         <li>Акции</li>
         <li>Прайс</li>
         <li>Контакты</li>
         <a href="tel:+0(915)0000000">0 (915) 000-00-00</a>
         <a href="https://www.google.com/maps/search/?api=1&query=Centro+Valencia" target="_blank">Ул. Body Time</a>
       </ul>
     </div>
   `;
  document.body.appendChild(modal);

  const closeBurgerModalBtn = document.getElementById("closeBurgerModal");

  openModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
  });

  closeBurgerModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
