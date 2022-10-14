import React, { useState } from "react";

function About() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center text-center">
      <div className="flex-col justify-between pt-20">
        <h1>Counter App</h1>
        <div className="flex-col pt-10">
          <h1>
            {count} is {count % 2 ? `odd` : "even"}
          </h1>

          <div className="space-x-6 pt-6">
            <button
              className="py-3 px-6 font-bold text-gray-200 rounded-xl bg-red-800"
              onClick={() => setCount(count - 1)}
            >
              Decrement
            </button>
            <button
              className="py-3 px-6 font-bold text-gray-200 rounded-xl bg-green-800"
              onClick={() => setCount(count + 1)}
            >
              Increment
            </button>
            <button
              className="py-3 px-6 font-bold text-gray-200 rounded-xl bg-yellow-800"
              onClick={() => setCount(0)}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
