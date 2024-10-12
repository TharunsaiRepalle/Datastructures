const grocercies = ["milk", "bread", "eggs", "flour", "choose", "sugar"];

//o(n)
const searchForItem = (item) => {
  for (let i = 0; i < grocercies.length; i++) {
    if (grocercies[i] === item) {
      console.log(`Found ${item}`);
    }
  }
};

searchForItem("flour");
