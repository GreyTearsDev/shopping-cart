export default function findProduct(id, arrayOfProducts) {
  if (id === null || arrayOfProducts === null) return null;
  if (arrayOfProducts.length === 0) return null;

  let low = 0;
  let high = arrayOfProducts.length - 1;
  let mid;

  while (high >= low) {

    mid = low + Math.floor((high - low) / 2);

    if (arrayOfProducts[mid].id === id) {
       return arrayOfProducts[mid];
    }else if (arrayOfProducts[mid].id > id) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
   }
  return null;
}
