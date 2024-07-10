let Bagitem;
onload();
function onload() {
  let bagItemsstr = localStorage.getItem("Bagitem");
  Bagitem = bagItemsstr ? JSON.parse(bagItemsstr) : [];
  BagitemCount();
  AllitemsonHomePage();
}

function AddToBag(itemid) {
  Bagitem.push(itemid);
  localStorage.setItem("Bagitem", JSON.stringify(Bagitem));
  BagitemCount();
}

function BagitemCount() {
  let BagitemCountElement = document.querySelector(".bag-item-count");
  if (Bagitem.length > 0) {
    BagitemCountElement.style.visibility = "visible";
    BagitemCountElement.innerText = Bagitem.length;
  } else {
    BagitemCountElement.style.visibility = "hidden";
  }
}

function AllitemsonHomePage() {
  let itemscontainerElement = document.querySelector(".items-conatiner");
 if (!itemscontainerElement) {
  return;
 }
  let innerHtml = "";
  items.forEach((item) => {
    innerHtml += `
    <div class="item-container">
        <img class="item-image" src="${item.image}" alt="item image">
        <div class="rating">
            ${item.rating.stars} ⭐ | ${item.rating.count}
        </div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="Discount">(${item.discount_percentage}% OFF)</span>
        </div>
        <button class="btn-add-bag" onclick="AddToBag(${item.id})">Add to Bag</button>
    </div>
`;
  });

  itemscontainerElement.innerHTML = innerHtml;
}
// const items = {
//     item_image : "./images/1.jpg",
//     rating: {
//         stars:4.5,
//         noofrating: 1400
//     },
//     company_name: "Carlton Company",
//     item_name: "Rhodium-plated CZ Floral Studs",
//     current_price:  606,
//     original_price: 1045,
//     discount:42
// }

// 13:23:25