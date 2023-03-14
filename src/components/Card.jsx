import { Link } from "react-router-dom";

export const Card = (props) => {
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  return (
    <div className="flex justify-center gap-5">
      <Link to={`/movies/${props.id}`}>
        <div
          className="block min-w-[200px] hover:mx-5 relative z-0 group hover:shadow-lg hover:shadow-red-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-150"
          key={props.id}
        >

          <img
            className="rounded-md "
            src={`${URL_IMAGE}${props.posterImg}`}
            alt=""
          />

          <div className="flex flex-col justify-between rounded-md w-full h-full bg-neutral-700 p-4 absolute -bottom-1 left-0 z-20 opacity-0 group-hover:opacity-100 transition ease-in-out delay-150 group-hover:-translate-y-1  group-hover:duration-150 hover:scale-110">
            <img
              className="w-full h-auto absolute top-0 left-0"
              src={`${URL_IMAGE}${props.banner}`}
              alt={props.title} />
            <div className="relative top-[110px] h-[60%] flex flex-col justify-between">
              <h5 className="text-lg font-medium leading-tight text-white">
                {props.title}
              </h5>
              <p className="text-sm text-gray-300 font-sans">
                {props.description.substring(0, 65) + '...'}
              </p>
              <p className="text-base text-red-500 font-medium">
                {`${props.popularity} 🔥`}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
