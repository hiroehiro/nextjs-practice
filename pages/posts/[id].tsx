import { Layout } from "@/components/Layout";
import { MyHead } from "@/components/MyHead";
import { getAllPostIds, getPostData } from "@/lib/post";
import utilStyle from "../../styles/utils.module.css";

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

type Props = {
  id: string;
};

export async function getStaticProps({ params }: { params: Props }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

type postDataProps = {
  title: string;
  date: string;
  blogContentHTML: string;
};

export default function Post({ postData }: { postData: postDataProps }) {
  return (
    <Layout>
      <MyHead title={postData.title} />
      <article>
        <h1 className={utilStyle.headingX1}>{postData.title}</h1>
        <div className={utilStyle.lightText}>{postData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }} />
      </article>
    </Layout>
  );
}
