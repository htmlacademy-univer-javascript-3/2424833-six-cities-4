import RatingStars from './rating.ts';

type Review = {
  id: string;
  date: Date;
  user: {
    name: string;
    avatarUrl: string;
    isPro: false;
  };
  comment: string;
  rating: RatingStars;
}

export default Review;
