export type postType = {
  Author: string;
  Content: string;
  Comments: commentType[];
  Day_post: string;
};
export type commentType = {
  Author: string;
  Content: string;
  Day_comment: string;
};
