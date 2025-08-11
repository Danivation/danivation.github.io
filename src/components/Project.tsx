import { Link } from "react-router";
import "../index.css"

type ProjectProps = {
  id: string;
}

export function Project({ id }: ProjectProps) {
  return (
    <Link to={`/projects/${id}`} className="transition-transform duration-300 transform hover:scale-105">
      <div className="text-center justify-center rounded-xl bg-accent h-50 flex">
        <p className="text-3xl mt-2 capitalize">{id}</p>
      </div>
    </Link>
  );
}