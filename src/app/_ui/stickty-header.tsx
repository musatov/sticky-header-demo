import { FC } from "react";

export const StickyHeader: FC<{ title: string }> = ({ title }) => (
  <h1 className="w-full text-lg text-center sticky p-4 top-0 bg-slate-100 shadow-b dark:bg-black dark:shadow-slate-500">
    {title}
  </h1>
);
