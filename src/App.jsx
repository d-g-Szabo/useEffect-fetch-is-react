import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HamburgerDiv from "./components/HamburgeDiv";
import { burgers } from "./lib/burgerData";
import TestimonialsDiv from "./components/TestimonialsDiv";
import ButtonMsg from "./components/ButtonMsg";
import Recipes from "./components/Recipes";
import WorkshopComponent from "./components/WorkshopComponent";

// destructuring and importing the burgers array from burgerData.js

export default function App() {
  const numbers = [1, 2, 3, 4, 5];

  const doubledNumbers = numbers.map((number) => number * 2);

  console.log(doubledNumbers); // [2, 4, 6, 8, 10]

  // function ItemAdder() {
  //   const items = ["Item 1", "Item 2", "Item 3"];
  //   const htmlItems = items.map((item) => <li key={item}>{item}</li>);

  //   return <ul>{htmlItems}</ul>;
  // }

  const items = ["Item 1", "Item 2", "Item 3"];
  return (
    // We are going to refactor this code in two steps:
    // I want to separate my data and my components
    // how can I store my data? In a library folder as an array of objects
    // How can I instatiate multiple components? Loop through the array of objects and create a component for each object

    <>
      <Header />
      {burgers.map((burger, index) => (
        // Need to return word if using curly braces
        <HamburgerDiv
          key={index}
          name={burger.name}
          src={burger.src}
          description={burger.description}
        />
      ))}
      {/* {ItemAdder()} */}
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Recipes />
      <TestimonialsDiv
        username="LittleBugger"
        review="I love Burgers"
        rating="⭐⭐⭐⭐⭐"
        favoriteBurger="Chicken Sandwich"
      />
      <ButtonMsg />
      <WorkshopComponent />
      <Footer />
    </>
  );
}
