//Реалізація делегування на div.gallery і отримання url великого зображення.
//Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і
//додай у проект посилання на мініфіковані(.min) файли бібліотеки.
//Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
//Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку
// модального вікна із зображенням з прикладів бібліотеки basicLightbox.
//Розмітка елемента галереї
//Посилання на оригінальне зображення повинно зберігатися в data-атрибуті source на елементі <img>, і вказуватися
//в href посилання.Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

//Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням користувач буде перенаправлений на іншу сторінку. Заборони цю поведінку за замовчуванням.

//Закриття з клавіатури
//   УВАГА
//Наступний функціонал не обов'язковий для здавання завдання, але буде хорошою додатковою практикою.

//Додай закриття модального вікна після натискання клавіші Escape. Зроби так, щоб прослуховування клавіатури
//було тільки доти, доки відкрите модальне вікно.Бібліотекаи basicLightbox містить метод для програмного закриття
//модального вікна.

import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".js-gallery");
// const gallerySet = creategalleryItems();

// gallery.insertAdjacentHTML("beforeend", creategalleryItems);
gallery.innerHTML = creategalleryItems();

function creategalleryItems() {
  return galleryItems
    .map(
      (elem) =>
        `
    <div class ="gallery__item">
     <a href="${elem.original}" class="gallery__link">
     <img class="gallery__image" src="${elem.preview}" data-source="${elem.original}" alt="${elem.description}">
     </a>
    </div>`
    )
    .join("");
}

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const selectedImage = e.target.getAttribute("data-source");
  const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`);

  instance.show();

  gallery.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  });
});
