import { MyHead } from "@/components/MyHead";
import Link from "next/link";

export default function firstPost() {
  return (
    <div>
      <MyHead title="firstPost" />
      <h1>最初の投稿</h1>
      <h2>
        <Link href="/">ホームへ戻る</Link>
      </h2>
    </div>
  );
}
