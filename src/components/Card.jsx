import { Link } from "react-router-dom";

export const Card = (props) => {
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  return (
    <div className="flex justify-center gap-5">
      <Link to={`/movies/${props.id}`}>
        <div
          className="block min-w-[200px] relative z-0 group hover:shadow-lg hover:shadow-red-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-150"
          key={props.id}
        >

          <img
            className="rounded-md "
            src={`${URL_IMAGE}${props.posterImg}`}
            alt=""
          />

          <div className="rounded-md w-full h-full bg-slate-100 p-2 absolute -bottom-1 left-0 z-20 opacity-0 group-hover:opacity-100 transition ease-in-out delay-150 group-hover:-translate-y-1  group-hover:duration-150">
            <h5 className="mb-2 h-auto text-xl font-medium leading-tight text-red-600">
              {props.title}
            </h5>
            <p className="mb-4 text-base text-black font-sans text-justify">
              {props.description.substring(0, 160) + '...'}
            </p>
            <p className="mb-4 text-base text-blue-900 font-medium">
              {props.popularity}{' '}🔥
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
