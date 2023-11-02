import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Highlight from "./components/Hightlight";
import { useState } from "react";
import "./App.scss";
const stockHalloween = [
  {
    name: "Mucha",
    image:
      "https://astatic.aquamagasin.com/image/cache/catalog/pieces-detachees/visuel-non-disponible-600x600.jpg",
    prix: 140,
    stock: 1,
    description: "Lorem Ipsum",
    category: "cat",
  },
  {
    name: "Plum",
    image:
      "https://astatic.aquamagasin.com/image/cache/catalog/pieces-detachees/visuel-non-disponible-600x600.jpg",
    prix: 500,
    stock: 1,
    description: "Lorem Ipsum",
    category: "cat",
  },
  {
    name: "Moustache",
    image:
      "https://astatic.aquamagasin.com/image/cache/catalog/pieces-detachees/visuel-non-disponible-600x600.jpg",
    prix: 60,
    stock: 4,
    description: "Lorem Ipsum",
    category: "cat",
  },
  {
    name: "Gnome Lubrique",
    image:
      "https://astatic.aquamagasin.com/image/cache/catalog/pieces-detachees/visuel-non-disponible-600x600.jpg",
    prix: 69,
    stock: 6,
    description: "Lorem Ipsum",
    category: "gnomes",
  },
  {
    name: "Gnome Velu",
    image:
      "https://astatic.aquamagasin.com/image/cache/catalog/pieces-detachees/visuel-non-disponible-600x600.jpg",
    prix: 46,
    stock: 2,
    description: "Lorem Ipsum",
    category: "gnomes",
  },
  {
    name: "Gnome Précieux",
    image:
      "https://astatic.aquamagasin.com/image/cache/catalog/pieces-detachees/visuel-non-disponible-600x600.jpg",
    prix: 99,
    stock: 9,
    description: "Lorem Ipsum",
    category: "gnomes",
  },
  {
    name: "Gnome Glabre",
    image:
      "https://astatic.aquamagasin.com/image/cache/catalog/pieces-detachees/visuel-non-disponible-600x600.jpg",
    prix: 30,
    stock: 2,
    description: "Lorem Ipsum",
    category: "gnomes",
  },
  {
    name: "Gnome Hirsute",
    image:
      "https://astatic.aquamagasin.com/image/cache/catalog/pieces-detachees/visuel-non-disponible-600x600.jpg",
    prix: 209,
    stock: 12,
    description: "Lorem Ipsum",
    category: "gnomes",
  },
  {
    name: "Nain Posteur",
    image:
      "https://astatic.aquamagasin.com/image/cache/catalog/pieces-detachees/visuel-non-disponible-600x600.jpg",
    prix: 398,
    stock: 1,
    description: "Lorem Ipsum",
    category: "nains",
  },
  {
    name: "Nain Gomez",
    image:
      "https://astatic.aquamagasin.com/image/cache/catalog/pieces-detachees/visuel-non-disponible-600x600.jpg",
    prix: 48,
    stock: 2,
    description: "Lorem Ipsum",
    category: "nains",
  },
  {
    name: "Nain DeuxTrois",
    image:
      "https://astatic.aquamagasin.com/image/cache/catalog/pieces-detachees/visuel-non-disponible-600x600.jpg",
    prix: 82,
    stock: 23,
    description: "Lorem Ipsum",
    category: "nains",
  },
  {
    name: "Nain Portequoi",
    image:
      "https://astatic.aquamagasin.com/image/cache/catalog/pieces-detachees/visuel-non-disponible-600x600.jpg",
    prix: 976,
    stock: 2,
    description: "Lorem Ipsum",
    category: "nains",
  },
  {
    name: "Butternut",
    image:
      "https://astatic.aquamagasin.com/image/cache/catalog/pieces-detachees/visuel-non-disponible-600x600.jpg",
    prix: 10,
    stock: 26,
    description: "Lorem Ipsum",
    category: "courges",
  },
  {
    name: "Citrouille",
    image:
      "https://astatic.aquamagasin.com/image/cache/catalog/pieces-detachees/visuel-non-disponible-600x600.jpg",
    prix: 20,
    stock: 45,
    description: "Lorem Ipsum",
    category: "courges",
  },
  {
    name: "Spaghetti",
    image:
      "https://astatic.aquamagasin.com/image/cache/catalog/pieces-detachees/visuel-non-disponible-600x600.jpg",
    prix: 17,
    stock: 200,
    description: "Lorem Ipsum",
    category: "courges",
  },
  {
    name: "Potiron",
    image:
      "https://astatic.aquamagasin.com/image/cache/catalog/pieces-detachees/visuel-non-disponible-600x600.jpg",
    prix: 12,
    stock: 2,
    description: "Lorem Ipsum",
    category: "courges",
  },
];

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Header counter={counter} />
      <Highlight setCounter={setCounter} list={stockHalloween} />
      <Body setCounter={setCounter} list={stockHalloween} />
      <Footer />
    </>
  );
}

export default App;
