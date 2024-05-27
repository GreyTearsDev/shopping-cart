export default function addProductToCart(product, cart, setCart) {
    let productExists = false;

    const arr = [...cart];
  
    arr.forEach(prod => {
      if (prod.id === product.id) {
        ++prod.amount;
        productExists = true;
      }
    });

    if (!productExists) arr.push({ id: product.id, amount: 1 });
    setCart(arr);
}
