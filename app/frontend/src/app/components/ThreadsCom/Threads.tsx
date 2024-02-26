import { Button, Input } from "@nextui-org/react";
import axios, { AxiosResponse } from "axios";
import { postType } from "@/app/types/thread.type";
import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import Thread from "./Thread";

export default function Threads() {
  const [name, setName] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [posts, setPosts] = useState<postType[]>([]);
  const isInit = useRef<boolean>(false);
  useEffect(() => {
    if (isInit.current == false) {
      axios
        .get("http://localhost:8080/getallpost")
        .then((res: AxiosResponse) => {
          console.log(res.data.posts)
          res.data.posts.forEach((element: postType) => {
            setPosts((prev) => [...prev, element]);
          });
        });
      isInit.current = true;
    }
  }, []);

  const onAddPost = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let url = "http://localhost:8080/createpost";
    const content_str = "content=" + content;
    const name_str = "author=" + name;
    url += "?" + content_str + "&" + name_str;

    setContent("");
    setName("");
  };

  return (
    <div className="pt-5 pb-5 pr-8 pl-8">
      <div className="border-1">
        {posts.map((post, key) => {
          return (
            <div className="border-1" key={key}>
              <Thread post={post} />
            </div>
          );
        })}
      </div>

      <form action="post" onSubmit={onAddPost} className="border-1">
        <label>author : </label>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label> content : </label>
        <Input
          type="text"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
