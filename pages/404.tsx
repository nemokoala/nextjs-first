import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();
  const onClick = () => router.push("/");
  return (
    <div>
      what are you doing here
      <button onClick={onClick}>버튼</button>
    </div>
  );
}
