import { ParsedUrlQuery } from 'querystring';
import type {
  // GetServerSideProps,
  GetStaticProps, InferGetStaticPropsType, NextPageWithLayout,
} from 'next';
import Head from 'next/head';
import { RiChatNewLine } from 'react-icons/ri';
// import { Contents } from '@/components/app/Contents';
// import { Header } from '@/components/app/Header';
import { Heading } from '@/components/app/Heading';
import { Posts } from '@/components/app/Posts';
import { PowerBI } from '@/components/app/PowerBI';
// import { Grid } from '@/components/common/Layout';
// import { Hero } from '@/components/home/Hero';
// import { ReagentGraph } from '@/components/app/ReagentGraph';
import { APP_DESCRIPTION, APP_NAME, APP_URL } from '@/config/app';
import { getPosts } from '@/utils/getPosts';
import type { Post } from '@/types/Post';


type Props = {
  posts: Post[];
};

type Params = ParsedUrlQuery;

const View: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ posts }) => {
  console.log("View page displayed !!")
  
  return (
    <>
      <Head>
        <title>FR13</title>
        <meta name="description" content={APP_DESCRIPTION} />
        <meta property="og:title" content={APP_NAME} />
        <meta property="og:description" content={APP_DESCRIPTION} />
        <meta property="og:url" content={APP_URL} />
      </Head>
     
      <Heading icon={<RiChatNewLine />} text="home3">
        ここにダッシュボードを作るよ2。
      </Heading>

      <div>
      <section id="posts">...</section>
      <Posts posts={posts} />
      <section id="posts2">...</section>
      <Posts posts={posts} />
      <section id="posts3">...</section>
      <PowerBI />
      {/* <ReagentGraph /> */}
      {/* <LabelDemo /> */}
      </div>
    </>
  );
};



export default View;

export const getStaticProps: GetStaticProps<Props, Params> = async () => {
  console.log("ISR running !!!\n");
  return {
    props: {
      posts: getPosts(),
    },
    revalidate: 1,
  };
};





// const View = (props:Props ) => {
//   console.log("View page displayed !!!")
  
//   return (
//     <>
//       <Head>
//         <title>FR13</title>
//         <meta name="description" content={APP_DESCRIPTION} />
//         <meta property="og:title" content={APP_NAME} />
//         <meta property="og:description" content={APP_DESCRIPTION} />
//         <meta property="og:url" content={APP_URL} />
//       </Head>
     
//       <Heading icon={<RiChatNewLine />} text="home3">
//         ここにダッシュボード。{props.dateString}
//       </Heading>

//       <div>
//       <section id="posts">...</section>
//       <Posts posts={props.posts} />
//       <section id="posts2">...</section>
//       <Posts posts={props.posts} />
//       <section id="posts3">...</section>
//       <PowerBI />
//       <ReagentGraph/>
//       </div>
//     </>
//   );
// };

// export default View;

// export const getServerSideProps: GetServerSideProps = async () => {
//     console.log("SSR running !!!\n");
//   getFromDB();
//   return {
//     props: {
//       dateString: new Date().toTimeString(),
//       posts: getPosts(),
//     }
//   };
// };


// View.getLayout = (page) => {
//   return( 
//   <div className="global-layout">
//     <Grid
//       className="global-layout__header"
//       css={{
//         h: '100vh',
//         gridTemplateRows: 'auto 1fr',
//       }}
//     >
//       <Header />
//       <Hero />
//     </Grid>
//     <Contents className="global-layout__contents">{page}</Contents>
//   </div>
//   )
// };