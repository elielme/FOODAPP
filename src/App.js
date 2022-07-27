import { Fragment, useState } from "react";
import Cart from "./componnents/Cart/Cart";
import Header from "./componnents/Layout/Header";
import Meals from "./componnents/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
