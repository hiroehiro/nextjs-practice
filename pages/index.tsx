import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import { MyHead } from "@/components/MyHead";
import { Layout } from "@/components/Layout";
import utilStyle from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import getSortedPostData from "../lib/post";
import { GetStaticProps, NextPage } from "next";

//SSGの場合
export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostData();
  return {
    props: {
      allPostsData,
    },
  };
};

//SSRの場合
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       //コンポーネントに渡すためのprops

//     },
//   };
// }

type postdatatype = {
  id: string;
  title: string;
  date: string;
  thumbnail: string;
};

type Props = { allPostsData: Array<postdatatype> };

const Home: NextPage<Props> = ({ allPostsData }) => {
  return (
    <>
      <MyHead title="next.js blog" />
      <Layout home={true}>
        <section>
          <p className={utilStyle.headingMd}>プロフィールです</p>
        </section>

        <section>
          <h2>📝エンジニアのブログ</h2>
          <div className={styles.grid}>
            {allPostsData.map((postdata) => (
              <article key={postdata.id}>
                <Link href={`/posts/${postdata.id}`}>
                  <img
                    src={postdata.thumbnail}
                    className={styles.thumbnailImage}
                    alt=""
                  />
                </Link>
                <Link href={`/posts/${postdata.id}`} legacyBehavior>
                  <a className={utilStyle.boldText}>{postdata.title}</a>
                </Link>
                <br />
              </article>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
