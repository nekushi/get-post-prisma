"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getAllNames() {
  const users = await prisma.name.findMany();

  return users;
}

export async function addName(prevState: unknown, formdata: FormData) {
  const name = formdata.get("name") as string;

  const newName = await prisma.name.create({ data: { name } });
  console.log(newName);

  revalidatePath("/");
  redirect("/");
}
