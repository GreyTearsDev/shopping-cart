import findProduct from "./findProduct";
export default function addProductToCart(product, amount, cart, setCart) {
  const arr = [...cart];
  let productToAdd = findProduct(product.id, cart);

  if (productToAdd) {
    arr.forEach(prod => {
      if (prod.id === productToAdd.id) ++productToAdd.amount
    })
  } else {
    arr.push({ id: product.id, amount: amount });
  }

  setCart(arr);
}
