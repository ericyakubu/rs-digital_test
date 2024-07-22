export interface IMessage {
  sender: string;
  message: string;
  date: string;
}

export interface IReview {
  authorImg: string;
  authorName: string;
  town: string;
  review: string;
  images: string[];
  date: string;
  comments: string;
  likes: number;
}
