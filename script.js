const menuItems = [
  // Starters
  { name: "Spring Rolls", category: "starter", type: "starter", price: "$5", image: "https://th.bing.com/th/id/OSK.c2e15bf67ff2ad3bde0e49a4646e81ec?w=184&h=273&rs=2&qlt=80&o=6&cdv=1&dpr=1.5&pid=16.1" }, // Spring rolls (crispy vegetable rolls)
  { name: "Caprese Salad", category: "starter", type: "starter", price: "$6", image: "https://th.bing.com/th/id/OSK.c63cc49bdde09408e4182ca909bfa442?w=184&h=122&rs=2&qlt=80&o=6&cdv=1&dpr=1.5&pid=16.1" }, // Caprese salad (tomato, mozzarella, basil)
  { name: "Samosa", category: "starter", type: "starter", price: "$3", image: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg" }, // Samosa (spiced potato pastry)
  { name: "Garlic Bread", category: "starter", type: "starter", price: "$4", image: "https://th.bing.com/th/id/OSK.9b898441e31e150ce2c53a9c07412a03?w=184&h=138&rs=2&qlt=80&o=6&cdv=1&dpr=1.5&pid=16.1" }, // Garlic bread (toasted with garlic butter)
  { name: "Stuffed Mushrooms", category: "starter", type: "starter", price: "$6", image: "https://th.bing.com/th/id/OSK.a984ba81c752f70f7d1ad142a135e745?w=184&h=90&rs=2&qlt=80&o=6&cdv=1&dpr=1.5&pid=16.1" }, // Stuffed mushrooms (cheese-filled)
   // Mains
  { name: "Margherita Pizza", category: "main", type: "main", price: "$12", image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg" }, // Margherita pizza (tomato, mozzarella, basil)
  { name: "Grilled Chicken", category: "main", type: "main", price: "$14", image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg" }, // Grilled chicken (herb-marinated)
  { name: "Vegetable Biryani", category: "main", type: "main", price: "$10", image: "https://th.bing.com/th/id/OSK.e2188cb918c6da5bc7d175ac750be7e2?w=184&h=278&rs=2&qlt=80&o=6&cdv=1&dpr=1.5&pid=16.1" }, // Vegetable biryani (spiced rice with veggies)
  { name: "Pasta Carbonara", category: "main", type: "main", price: "$13", image: "https://th.bing.com/th/id/OSK.151e8ecece0473ecb774609c3ae639fe?w=184&h=122&rs=2&qlt=80&o=6&cdv=1&dpr=1.5&pid=16.1" }, // Pasta carbonara (creamy with bacon)
  { name: "Fish and Chips", category: "main", type: "main", price: "$12", image: "https://www.bing.com/th/id/OIP.7c0Fbp0o5df8DWhVk3MmGQHaE8?w=224&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" }, // Fish and chips (crispy fish with fries)

  // Drinks
  { name: "Mango Lassi", category: "drink", type: "drink", price: "$4", image: "https://th.bing.com/th/id/OSK.77be83d2c7f8340528ebe54c631f3f86?w=184&h=278&rs=2&qlt=80&o=6&cdv=1&dpr=1.5&pid=16.1" }, // Mango lassi (yogurt drink with mango)
  { name: "Iced Coffee", category: "drink", type: "drink", price: "$5", image: "https://th.bing.com/th/id/OIP.B8UZUBNSlOh4hJksM6dfRQHaEK?w=200&h=200&c=10&o=6&dpr=1.5&pid=genserp&rm=2" }, // Iced coffee (chilled with cream)
  { name: "Lemonade", category: "drink", type: "drink", price: "$3", image: "https://th.bing.com/th/id/OSK.HEROpzzMzozjWPje4jkhHGkgSMTWdmcRMHs6D9v21jO5Zmk?w=296&h=176&c=13&rs=2&o=6&dpr=1.5&pid=SANGAM" }, // Lemonade (freshly squeezed)
  { name: "Mojito", category: "drink", type: "drink", price: "$6", image: "https://th.bing.com/th/id/OSK.088989841e077bf69ead49c24a189267?w=197&h=118&c=7&rs=2&qlt=80&o=6&cdv=1&dpr=1.5&pid=16.1" }, // Mojito (mint and lime)
  // Desserts
  { name: "Tiramisu", category: "dessert", type: "dessert", price: "$7", image: "https://th.bing.com/th/id/OSK.f4641b4bbe6ca83c5c1a890dedf869ec?w=184&h=257&rs=2&qlt=80&o=6&cdv=1&dpr=1.5&pid=16.1" }, // Tiramisu (coffee-flavored)
  { name: "Chocolate Brownie", category: "dessert", type: "dessert", price: "$5", image: "https://th.bing.com/th/id/OSK.7a84fd200ea43ab92ad8f6afa47e438e?w=184&h=184&rs=2&qlt=80&o=6&cdv=1&dpr=1.5&pid=16.1" }, // Chocolate brownie (fudgy)
  { name: "Gulab Jamun", category: "dessert", type: "dessert", price: "$4", image: "https://th.bing.com/th/id/OSK.a312c694c390520dca292ae06761d918?w=184&h=103&rs=2&qlt=80&o=6&cdv=1&dpr=1.5&pid=16.1" }, // Gulab jamun (milk dumplings)
  { name: "Cheesecake", category: "dessert", type: "dessert", price: "$6", image: "https://th.bing.com/th/id/OSK.d9d3db51a0163d5719f84ced585c7c35?w=184&h=250&rs=2&qlt=80&o=6&cdv=1&dpr=1.5&pid=16.1" }, // Cheesecake (creamy with berries)
  { name: "Apple Pie", category: "dessert", type: "dessert", price: "$6", image: "https://th.bing.com/th/id/OSK.ca7b4ec746e1c1b3beb8dfa8f494ac38?w=184&h=122&rs=2&qlt=80&o=6&cdv=1&dpr=1.5&pid=16.1" } // Apple pie (warm with apples)
  ];
  window.onload = function() {
    alert("Welcome to Foodie's Delight! Enjoy your meal!");
  };
function groupByType(items) {
  const grouped = { starter: [], main: [], drink: [], dessert: [] };
  items.forEach(item => {
    if (grouped[item.type]) {
      grouped[item.type].push(item);
    }
  });
  return grouped;
}

function renderMenu(items) {
  const menu = document.getElementById("menu");
  menu.innerHTML = "";

  const grouped = groupByType(items);
  for (const type in grouped) {
    if (grouped[type].length > 0) {
      const section = document.createElement("div");
      section.innerHTML = `<h2>${type[0].toUpperCase() + type.slice(1)}s</h2>`;
      const container = document.createElement("div");
      container.className = "menu";

      grouped[type].forEach(item => {
        const div = document.createElement("div");
        div.className = "menu-item";
        div.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p class="price">${item.price}</p>
        `;
        container.appendChild(div);
      });

      section.appendChild(container);
      menu.appendChild(section);
    }
  }
}

function filterCategory(category) {
  if (category === "all") {
    renderMenu(menuItems);
  } else {
    renderMenu(menuItems.filter(item => item.category === category));
  }
}

function showSpecial() {
  const specials = [];
  const used = new Set();
  while (specials.length < 4) {
    const rand = Math.floor(Math.random() * menuItems.length);
    if (!used.has(rand)) {
      specials.push(menuItems[rand]);
      used.add(rand);
    }
  }

  let message = "🍛 Today's Specials:\n\n";
  specials.forEach(item => {
    message += `${item.name} - ${item.price}\n`;
  });
  alert(message);
}

renderMenu(menuItems); // Initial render