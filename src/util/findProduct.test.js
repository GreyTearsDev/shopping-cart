import { describe, it, expect} from "vitest"
import findProduct from "./findProduct"


describe("findProduct function", () => {
  it("returns null if the array of objects either algument is null",() => {
    let array = [{id: 1}, {id:2}, {id: 3}]; 
    let id = 1;

    expect(findProduct(null, array)).toBeNull();
    expect(findProduct(id, null)).toBeNull();
    expect(findProduct(null, null)).toBeNull();
  })

  it("returns null if the array of objects is empty ",() => {
    let array = [];
    let id = 1;
    expect(findProduct(id, array)).toBeNull();
  })

  it("returns the object in the middle of the array if its id property matches the id argument", () => {
    let array = [{id: 1}, {id:2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7} ]; 
    expect(findProduct(4, array)).toMatchObject({id: 4});

    array = [{id: 1}, {id:2}, {id: 3}, {id: 4}]; 
    expect(findProduct(2, array)).toMatchObject({id: 2});
  })

  it("returns the object whose id matches the id argument", () => {
    let array = [{id: 1}, {id:2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}]; 

    expect(findProduct(1, array)).toMatchObject({id: 1});
    expect(findProduct(7, array)).toMatchObject({id: 7});
    expect(findProduct(3, array)).toMatchObject({id: 3});
    expect(findProduct(4, array)).toMatchObject({id: 4});
  })

  it("returns null if no object with the given id is found", () => {
    let array = [{id: 1}, {id:2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}]; 

    expect(findProduct(10, array)).toBeNull();
  })
})
