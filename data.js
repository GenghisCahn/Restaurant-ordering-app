import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
  uuidv4() // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

export const itemsArray = [
    {
        name: "Pizza",
        ingredients: ["pepperoni, mushroom, mozzarella"],
        id: "Pizza",
        price: 14,
        emoji: "🍕",
        amount: 1
    },
    {
        name: "Hamburger",
        ingredients: ["beef, cheese, lettuce"],
        price: 12,
        emoji: "🍔",
        id: "Hamburger",
        amount: 1
    },
        {
        name: "Beer",
        ingredients: ["grain, hops, yeast, water"],
        price: 6,
        emoji: "🍺",
        id: "Beer",
        amount: 1
    }
]