import React from "react";
import { SearchParamProps } from "@/types";
import Sort from "@/components/Sort";

const Page = async ({ params }: SearchParamProps) => {
  const type = ((await params)?.type as string) || "";
  return (
    <div className="page-container">
      <section className="w-full">
        <h1 className="text-4xl font-bold capitalize">{type}</h1>
        <div className="total-size-section">
          <p className="text-lg">
            Total: <span className="font-bold">0 MB</span>
          </p>

          <div className="sort-container">
            <p className="hidden text-lg font-bold text-light-200 sm:block">
              Sort by:
            </p>
            <Sort />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Page;
