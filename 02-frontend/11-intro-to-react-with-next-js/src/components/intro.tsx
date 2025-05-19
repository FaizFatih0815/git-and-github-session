import { collectMeta } from "next/dist/build/utils";
import { redirect } from "next/dist/server/api-utils";

export default function Intro(props: {
  titlePage: string;
  contentPage: string;
}) {
  return (
    <>
      <h1 style={{ color: "red", fontSize: "48px" }}>{props.titlePage}</h1>
      <p>{props.contentPage}</p>
    </>
  );
}
