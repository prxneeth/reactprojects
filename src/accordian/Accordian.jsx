import React, { useState } from "react";

const data = [
  {
    id: "1",
    question: "What are accordion components?",
    answer:
      "Accordion components are UI elements used to display hidden content when clicked.",
  },
  {
    id: "2",
    question: "What is React useState?",
    answer:
      "useState is a React hook that allows you to add state to functional components.",
  },
  {
    id: "3",
    question: "What is the purpose of props in React?",
    answer:
      "Props are used to pass data from one component to another in React.",
  },
  {
    id: "4",
    question: "What is the difference between state and props?",
    answer:
      "State is local to the component and can change, whereas props are read-only and passed from parent to child components.",
  },
];

export const Accordian = () => {
  const [selected, setSelected] = useState(null);

  const handleSingleAnswer = (id) => {
    setSelected(selected === id ? null : id);
  };

  return (
    <div className="flex justify-center items-center p-4">
      <div className="bg-gray-300 rounded-lg justify-center p-3 w-2/3 shadow-2xl">
        {data.map((d) => (
          <div
            className="cursor-pointer shadow-sm shadow-black p-1 rounded-lg"
            onClick={() => handleSingleAnswer(d.id)}
            key={d.id}
          >
            <div className="flex justify-between p-2 rounded-lg mb-0.5">
              {d.question}{" "}
              <span className="transition-transform duration-300">
                {selected === d.id ? "-" : "+"}
              </span>
            </div>

            <div
              className={`bg-gray-100 border shadow-sm shadow-blue-800 w-full p-1 flex items-center h-14 rounded-md transition-all duration-300 ease-in-out overflow-hidden ${
                selected === d.id ? "max-h-40" : "max-h-0"
              }`}
            >
              <span className={`${selected === d.id ? "block" : "hidden"}`}>
                {d.answer}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
