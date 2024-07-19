import Review from "../review/Review";

const ListOfReviews = () => {
  return (
    <ul className="p-5 flex flex-col gap-5 overflow-y-auto max-h-80 ">
      <Review />
      <Review />
      <Review />
      <Review />
    </ul>
  );
};
export default ListOfReviews;
