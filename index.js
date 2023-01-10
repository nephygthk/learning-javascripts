// map: it's an object that holds key value pairs of any data type. 

const store = new Map([
  ["t-shits", 20],
  ["socks", 10],
  ["hoodie", 40],
  ["shorts", 70],
  ["underwear", 60],
]);

store.forEach((value, key) => console.log(`${key} $${value}`));



//doing it with normal function my own doing
// store.forEach(displayStore);

// function displayStore(value, key){
  
//   return console.log(`${key} $${value}`);
// }

//how to get items from the store Map with get() method

let shoppingCart = 0;

store.get();//to get item from the store map
store.set();//to add item to the store map
store.delete()//to delete item from the store map
store.has(""); // to check if store has an item or not. always returns a boolean value
store.size; //to check number of item inside the store



shoppingCart += store.get("socks");
shoppingCart += store.get("underwear");
shoppingCart += store.get("shorts");
console.log(shoppingCart);

//how to use the set() method



