import { useRouter } from "next/router";

const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) { // when isFallis set to true in getStaticPaths
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h3>{post.title}</h3>
      <h5>{post.body}</h5>
    </div>
  );
};

export async function getStaticPaths() {
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const posts = await response.json();

  // const paths = posts.map(post => {
  //   return {
  //     params: { postId: `${post.id}` }
  //   }
  // })

  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    // paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { postId } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post: data,
    },
  };
}

export default Post;
