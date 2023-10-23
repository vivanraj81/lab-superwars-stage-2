const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",                      
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength


const initPlayers = (players) => {
    let detailedPlayers = [];
    for (let index = 0; index < players.length; index++) {
      const player = players[index];
      const strength = getRandomStrength();
      const image = "images/super-" + (index + 1) + ".png";
      const type = index % 2 === 0 ? "hero" : "villain";
      const id = index + 1;
  
      detailedPlayers.push({
        name: player,
        strength: strength,
        image: image,
        type: type,
        id: id,
      });
    }
    return detailedPlayers;
  };
// initPlayers();

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    return Math.ceil(Math.random() * 100);
  };
  console.log(getRandomStrength());
  
  // Loop through players and accumulate HTML template
  // depending of type of player(hero|villain)
  // Type your code here
  
  const view = (playerObject) => {
    let player = document.createElement("div");
    player.classList.add("player");
  
    let name = document.createElement("div");
    name.className = "name";
    name.textContent = playerObject.name;
  
    let strength = document.createElement("div");
    strength.textContent = playerObject.strength;
    strength.className = "strength";
  
    let image = document.createElement("img");
    image.setAttribute("src", playerObject.image);
    image.setAttribute("alt", "");
  
    player.append(image, name, strength);
    return player;
  };
  
  const buildPlayers = (players, type) => {
    let fragment = document.createElement("div");
    players
      .filter((player) => player.type == type)
      .forEach((player) => fragment.append(view(player)));
    return fragment.innerHTML;
  };
  
  // Display players in HTML
  const viewPlayers = (players) => {
    document.getElementById("heroes").innerHTML = buildPlayers(players, "hero");
    document.getElementById("villains").innerHTML = buildPlayers(players,"villain");
  };
  
  window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
  };
  console.log(PLAYERS);



 // Create players using for loop
    // Type your code here