import Link from "next/link";

const Posts = ({ posts }) => {
  return (
    <div>
      <h2>posts</h2>

      {posts.map(post => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <h4>{post.id} {post.title}</h4>
            </Link>
          </div>
        )
      })}
    </div>
  );
};

export default Posts;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      // posts: data,
      posts: data.slice(0, 3),
    },
  };
}
