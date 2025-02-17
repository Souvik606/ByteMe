import React from "react";
import { SearchParamProps } from "@/types";
import Sort from "@/components/Sort";
import { getFiles } from "@/lib/actions/file.action";
import { Models } from "node-appwrite";
import Card from "@/components/Card";

const Page = async ({ params }: SearchParamProps) => {
  const type = ((await params)?.type as string) || "";
  const files = await getFiles();
  console.log(files);

  return (
    <div className="page-container">
      <section className="w-full">
        <h1 className="text-4xl font-bold capitalize text-brand-500">{type}</h1>
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
      {files.total > 0 ? (
        <section className="file-list">
          {files.documents.map((file: Models.Document) => (
            <Card key={file.$id} file={file} />
          ))}
        </section>
      ) : (
        <p className="empty-list">No files uploaded</p>
      )}
    </div>
  );
};
export default Page;
