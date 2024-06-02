import React from "react";
import Transition from "../Transition/Transition";
import Slider from "../Slider/Slider";
function Home() {
  return (
    <div className="flex justify-center items-center h-[50vh]">
      <Slider />
    </div>
  );
}

export default Transition(Home);
