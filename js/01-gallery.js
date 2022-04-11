import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBlock = document.querySelector("div.gallery");

const galleryItemsCreate = galleryItems
  .map((image) => {
    return ` <div class="gallery__item"><a  href="${image.original}" class="gallery__link"><img src="${image.preview}" alt="${image.description}" srcset="${image.original}" class="gallery__image"></a></div>`;
  })
  .join("");

galleryBlock.innerHTML = galleryItemsCreate;

galleryBlock.addEventListener("click", imageItem);

function imageItem(item) {
  if (item.target.nodeName !== "a") {
    return;
  }
  console.log("akakakakakakak");
}
