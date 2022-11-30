const ArticleListByCategory = ({ category, articles }) => {
  return (
    <div>
      <h2>
        Showing news for category <i>{category}</i>
      </h2>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h5>
              {article.id} {article.title}
            </h5>
            <p>{article.description}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  console.log('query =>', query);
  console.log('reading cookie =>', req.headers.cookie);
  // setting cookie
  res.setHeader("Set-Cookie", ['name=Milan']);
  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
}

export default ArticleListByCategory;
