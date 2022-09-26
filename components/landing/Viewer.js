import dynamic from "next/dynamic";

export default function view() {
  const Dynamic = dynamic(() => import("..components/landing/Model.js"), {
    ssr: false,
  });

  return <Dynamic />;
}
