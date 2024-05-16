export type PostType = {
  content: string;
  comments: commentType[];
  CreatedAt:string;
  DeletedAt:string;
  UpdatedAt:string;
  ID:number;
  favonum:number;
};

export type User_Post = {
  id:number,
  username:string,
  usertag:string,
  img_path:string
}

export type ThreadType = {
  Post:PostType,
  User:User_Post,
  IsFavo:boolean
  ImageURLs:string[]
}



export type commentType = {
  Author: string;
  Content: string;
  CreatedAt:string;
  DeletedAt:string;
  UpdatedAt:string;
  ID:number;
};
