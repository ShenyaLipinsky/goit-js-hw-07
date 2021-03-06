import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryBlock = document.querySelector("ul.gallery");
const galleryItemsCreate = galleryItems
  .map((image) => {
    return ` <a  href="${image.original}" class="gallery__item"><img src="${image.preview}" alt="${image.description}"  class="gallery__image"></a>`;
  })
  .join("");

galleryBlock.innerHTML = galleryItemsCreate;

new SimpleLightbox(".gallery .gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
