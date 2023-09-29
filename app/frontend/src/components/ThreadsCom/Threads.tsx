import React from "react";
export default function Threads() {
  const testData = [
    {
      AcountData: {
        name: "test1",
      },
      postDetail: {
        text: "よろしく",
        image: null,
        favo: 29,
        repost: 2,
      },
    },
    {
      AcountData: {
        name: "test2",
      },
      postDetail: {
        text: "よろしく",
        image: null,
        favo: 29,
        repost: 2,
      },
    },
  ];
  return (
    <div className="ml-2">
      <h2>Threads</h2>
    </div>
  );
}
