export type postType = {
  Author: string;
  Content: string;
  Comments: commentType[];
  CreatedAt:string;
  DeletedAt:string;
  UpdatedAt:string;
  ID:number;
};



export type commentType = {
  Author: string;
  Content: string;
  CreatedAt:string;
  DeletedAt:string;
  UpdatedAt:string;
  ID:number;
};
