"use client";

import { useActionState } from "react";
// import { AddName } from "../action";
import { addName } from "@/dal/name";

export default function Form() {
  const [state, formAction, pending] = useActionState(addName, undefined);

  return (
    <div>
      <form
        action={formAction}
        className="flex flex-col *:border-2 *:border-black w-1/4 p-4 space-y-2"
      >
        <h2>Add name below</h2>
        <input type="text" name="name" id="name" />
        {/* <input type="number" name="age" id="age" /> */}
        <button type="submit">Add name</button>
      </form>
    </div>
  );
}
