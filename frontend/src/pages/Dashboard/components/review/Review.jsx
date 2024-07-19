import { StarIcon } from "../../../../components/ui/icons";

const Review = () => {
  return (
    <li className="flex flex-col gap-4 border shadow-md bg-gray-100 rounded-md p-4 text-gray-700">
      <header className="flex justify justify-between">
        <div className="flex gap-2">
          <div className="flex items-center gap-2 hover:opacity-60">
            <img
              className="rounded-full max-w-7 max-h-7"
              src="/placeholder-user.jpg"
            />

            <span>asdasd asdasdasd</span>
          </div>
        </div>
        <div className="flex p-1 gap-1 text-orange-300">
          {[...new Array(5)].map((star, index) =>
            index < 3 ? (
              <StarIcon key={index} />
            ) : (
              <StarIcon key={index} fill={true} />
            )
          )}
        </div>
      </header>

      <p className="text-gray-600">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
        repudiandae perferendis aut commodi distinctio harum, enim eaque sunt
        quisquam recusandae illum unde blanditiis, pariatur totam quam eum illo
        nemo quo!
      </p>

      <footer className="flex justify-between">
        <span>Feb 13, 2021</span>
        {true && <button className="text-red-500">Eliminar</button>}
      </footer>
    </li>
  );
};

export default Review;
