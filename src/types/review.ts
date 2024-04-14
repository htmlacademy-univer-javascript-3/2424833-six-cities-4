type Review = {
  id: string;
  date: Date;
  user: {
    name: string;
    avatarUrl: string;
    isPro: false;
  };
  comment: string;
  rating: number;
}

export default Review;
