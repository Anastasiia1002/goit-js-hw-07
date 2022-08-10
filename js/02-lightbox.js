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
     <a href="${elem.original}" class="gallery__item">
     <img class="gallery__image" src="${elem.preview}"  alt="${elem.description}"/>
     </a>
        `
    )
    .join("");
}
new SimpleLightbox(".js-gallery a", {
  captionDelay: 250,
});

// gallery.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (e.target.nodeName !== "IMG") {
//     return;
//   }

//   const selectedImage = e.target.getAttribute("data-source");
//   const instance = basicLightbox.create(`
//     <img src="${selectedImage}" width="800" height="600">
// `);

//   instance.show();

//   gallery.addEventListener("keydown", (e) => {
//     if (e.key === "Escape") {
//       instance.close();
//     }
//   });
// });
