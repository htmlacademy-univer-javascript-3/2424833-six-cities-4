import {UserData} from './user-data.ts';

export type PostReview = {
  comment: string;
  rating: number;
}

export type Review = PostReview & {
  id: string;
  date: string;
  user: UserData;
}
