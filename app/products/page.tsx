import Link from "next/link";
export default function Products() {
  const ourProducts = [
    {
      name: "Perfume",
      slug: "perfume",
    },
    {
      name: "Hand Bag",
      slug: "handbag",
    },
    {
      name: "Watch",
      slug: "watch",
    },
  ];
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: "40px",
          color: "darkGreen",
          fontWeight: "bold",
        }}
      >
        Our Products
      </h1>
      <Link href="/" style={{ margin: "20px" }}>
        Home
      </Link>
      <div
        style={{
          display: "flex",
          color: "darkGreen",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
         <ul style={{ listStyle: "none", padding: 0 }}>
        {ourProducts.map((item) => (
          <li key={item.slug}>
           <Link href={`/products/${item.slug}`}>{item.name}</Link>

          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}
