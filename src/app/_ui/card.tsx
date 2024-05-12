import { FC } from "react";

export const Card: FC<{ index: number }> = ({ index }) => (
  <div className="bg-white dark:bg-gray-800 rounded-md p-6 m-4 w-80 shadow dark:shadow-none">
    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-400">
      Card {index}
    </h2>
    <p className="text-gray-600 dark:text-gray-200">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </p>
  </div>
);
