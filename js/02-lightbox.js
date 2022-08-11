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
     <img class="gallery__image" src="${elem.preview}" alt="${elem.description}"/>
     </a>
        `
    )
    .join("");
}

new SimpleLightbox(".js-gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
  captionPosition: "bottom",
});
