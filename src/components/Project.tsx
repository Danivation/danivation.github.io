import "../index.css"

type ProjectProps = {
  id: string;
}

export function Project({
  id,
}: ProjectProps) {
  return (
    <div className="text-center justify-center rounded-xl bg-accent h-50 flex">
      <p className="text-3xl mt-2">{id}</p>
    </div>
  );
}