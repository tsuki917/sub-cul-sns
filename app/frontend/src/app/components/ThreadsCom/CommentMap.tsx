import { commentType } from "@/app/types/thread.type";
type Props = {
  comment: commentType[];
};

export default function CommentMap(prop: Props) {
  return (
    <div>
      {prop.comment.map((ele, key) => {
        return (
          <div key={key} className=" p-3 border-t-1  border-black">
            <div className="relative ">
              <h2>{ele.Author}</h2>
              <h2>{ele.Content}</h2>
              <p className="text-m absolute bottom-0 right-0 ">
                {ele.CreatedAt.split("T")[0]+" "+ele.CreatedAt.split("T")[1].split(".")[0]}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
