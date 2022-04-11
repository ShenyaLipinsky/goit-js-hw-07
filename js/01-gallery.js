import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBlock = document.querySelector("div.gallery");
const lightBox = document.querySelector(".basicLightbox--visible");
const galleryItemsCreate = galleryItems
  .map((image) => {
    return ` <div class="gallery__item"><a  href="${image.original}" class="gallery__link"><img src="${image.preview}" alt="${image.description}" data-source="${image.original}" class="gallery__image"></a></div>`;
  })
  .join("");

galleryBlock.innerHTML = galleryItemsCreate;
galleryBlock.addEventListener("click", onImageItemClick);

function onImageItemClick(item) {
  if (item.target.nodeName !== "IMG") {
    return;
  }
  item.preventDefault();

  const instance = basicLightbox.create(
    `
    <img src="${item.target.dataset.source}">
    `,
    {
      onShow: (instance) => {
        const listener = function (event) {
          // console.log("key: ", event.key);
          if (event.key === "Escape") {
            document.removeEventListener("keydown", listener);
            return instance.close();
          }
        };
        document.addEventListener("keydown", listener);
      },
    }
  );

  instance.show();
}
