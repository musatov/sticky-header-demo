import { FC } from "react";

export const StickyHeader: FC<{ title: string }> = ({ title }) => (
  <>
    <h1 className="w-full text-lg -mb-4 z-20 text-center sticky p-4 top-0 bg-slate-100 dark:bg-black">
      {title}
    </h1>
    <div className="w-full sticky top-[52px] h-2 shadow-b dark:shadow-slate-500" />
    <div className="w-full -mt-4 h-2 z-10 bg-slate-100 dark:bg-black" />
  </>
);
