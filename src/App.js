import React from "react";
import { Header } from "./components";
function App() {
  return (
    <>
      <Header />
      <div className="w-full bg-orange-500">
        <section className="flex">
          <div className="flex flex-col justify-evenly flex-1 text-center">
            <h1 className="text-white text-6xl">Music App</h1>
            <p className="text-2xl px-20 py-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem been the industry's standard dummy text ever since
              the 1500s.
            </p>
            <div className="flex justify-center">
              <img
                className="h-auto w-40 object-contain"
                src={require("./images/apple.png").default}
              />
              <img
                className="h-auto w-40 object-contain"
                src={require("./images/appstore.png").default}
              />
            </div>
          </div>
          <div className="flex-1 justify-end flex">
            <div className="w-128">
              <img
                className="h-auto w-auto object-contain"
                src={require("./images/person.png").default}
              />
            </div>
          </div>
        </section>
        <section className="w-full bg-white h-64"></section>
      </div>
    </>
  );
}
export default App;
