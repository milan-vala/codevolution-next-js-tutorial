const News = ({ articles }) => {
  return (
    <div>
      <h2>News list page</h2>
      {articles.map((article) => {
        return (
          <h5 key={article.id}>
            {article.id} {article.title} | {article.category}
          </h5>
        );
      })}
    </div>
  );
};

export default News;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();
  console.log("getServerSideProps executing");
  return {
    props: {
      articles: data,
    },
  };
}
