import { FC } from "react";

export const Card: FC<{ index: number }> = ({ index }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 m-4 w-80">
    <h2 className="text-xl font-semibold text-gray-800">Card {index}</h2>
    <p className="text-gray-600">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </p>
  </div>
);
