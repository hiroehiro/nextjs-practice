import { FC, ReactNode } from "react";
import styles from "./layout.module.css";
import utilstyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "aaa";
export const siteTitle = "next.js blog";

type Props = {
  children: ReactNode;
  home?: boolean;
};

export const Layout: FC<Props> = function (props) {
  const { children, home = false } = props;
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.png"
              alt="プロフィール画像"
              className={`${utilstyles.borderCircle} ${styles.headerHomeImage}`}
            />
            <h1 className={utilstyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img
              src="/images/profile.png"
              alt="プロフィール画像"
              className={`${utilstyles.borderCircle}`}
            />
            <h1 className={utilstyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
};
