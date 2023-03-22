import Head from "next/head";
import { FC } from "react";

type Props = {
  title: string;
};

export const MyHead: FC<Props> = function (props) {
  const { title } = props;
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
