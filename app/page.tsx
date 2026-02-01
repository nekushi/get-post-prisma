import { getAllNames } from "@/dal/name";
import prisma from "@/lib/db";
import Link from "next/link";

export default async function Home() {
  const names = await getAllNames();

  return (
    <div className="p-4">
      <h1>Home Page.</h1>
      <Link
        href={"/forms"}
        className="inline-block border rounded px-2 py-1 mb-2"
      >
        <button>Add Names</button>
      </Link>
      <hr />
      {names.map((name: Name) => (
        <p key={name.id}>{name.name}</p>
      ))}
    </div>
  );
}

type Name = {
  id: number;
  name: string;
};
