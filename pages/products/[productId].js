import { useRouter } from "next/router";

const Product = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h4>
        {`id: ${product.id} \n
        title: ${product.title} \n
        price: ${product.price}`}
      </h4>
    </div>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `http://localhost:4000/products/${params.productId}`
  );
  const data = await response.json();
  console.log(`generating / re-generating page - ${params.productId}`)

  return {
    props: {
      product: data,
    },
    revalidate: 3,
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { productId: "1" },
      },
    ],
    fallback: true,
  };
}

export default Product;
