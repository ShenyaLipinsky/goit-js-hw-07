import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryBlock = document.querySelector("ul.gallery");
const lightBox = document.querySelector(".basicLightbox--visible");
const galleryItemsCreate = galleryItems
  .map((image) => {
    return ` <a  href="${image.original}" class="gallery__item"><img src="${image.preview}" alt="${image.description}"  class="gallery__image"></a>`;
  })
  .join("");

galleryBlock.innerHTML = galleryItemsCreate;

galleryBlock.addEventListener("click", onImageItemClick);

function onImageItemClick(item) {
  if (item.target.nodeName !== "IMG") {
    return;
  }
  item.preventDefault();

  const simpleLightBoxCreate = new SimpleLightbox(".gallery .gallery__item", {
    captionsData: "alt",
    captionDelay: 250,
  });
  //   if (simpleLightBoxCreate.close) {
  //     simpleLightBoxCreate.destroy;
  //   }
}
