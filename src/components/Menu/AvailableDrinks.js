import classes from "./AvailableDrinks.module.css";
import Card from "../UserInput/Card";
import Items from "./Items/Items";
const drinksOnMenu = [
  {
    id: "d1",
    name: "Black Tea Latte",
    category: "Fresh Milk",
    price: 4.5,
    // priceL: 5.0,
  },
  {
    id: "d2",
    name: "Matcha Latte",
    category: "Fresh Milk",
    price: 4.5,
    // priceL: 5.0,
  },
  {
    id: "d3",
    name: "Pearl Milk",
    category: "Fresh Milk",
    price: 4.5,
    // priceL: 5.0,
  },
  {
    id: "d4",
    name: "Strawberry Latte",
    category: "Fresh Milk",
    price: 4.5,
    // priceL: 5.0,
  },
  {
    id: "d5",
    name: "Fresh Taro with Milk",
    category: "Fresh Milk",
    price: 4.5,
    // priceL: 5.0,
  },
];

function AvailableDrinks() {
  const drinksList = drinksOnMenu.map((drink) => (
    <Items
      id={drink.id}
      key={drink.id}
      name={drink.name}
      category={drink.category}
      price={drink.price}
      // priceL={drink.priceL}
    />
  ));
  return (
    <section className={classes.drinks}>
      <Card>
        <ul>{drinksList}</ul>
      </Card>
    </section>
  );
}

export default AvailableDrinks;
