const Products = ({ products }) => {
  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => {
        return (
          <div key={product.id}>
            <h4>
              {product.id} - {product.title} - price {product.price}
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();
  console.log("generating / re-generating page")

  return {
    props: {
      products: data,
    },
    revalidate: 3,
  };
}

export default Products;
