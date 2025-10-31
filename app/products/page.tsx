import Link from "next/link";
import Image from "next/image"; 
export default function Products() {
  const ourProducts = [
    {
      name: "Perfume",
      slug: "perfume",
      price:"$49.99",
      image: "/perfume.jpg",
    },
    {
      name: "Hand Bag",
      slug: "handbag",
      price: "$89.99",
      image: "/handbagBlack.jpg",
    },
    {
      name: "Watch",
      slug: "watch",
      price: "$129.99",
      image: "/watch.jpg",
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
         <div style={{display:"flex", gap: "30px"}}>
        {ourProducts.map((item) => (
          <div key={item.slug}
          style={{
              border: "2px solid #ddd",
              borderRadius: "15px",
              padding: "20px",
              width: "220px",
              textAlign: "center",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              backgroundColor: "#fff",
            }}>
               <Image
              src={item.image}
              alt={item.name}
              width={200}
              height={200}
              style={{
                borderRadius: "10px",
                objectFit: "cover",
                marginBottom: "15px",
              }}
            />
            <h2 style={{ color: "darkgreen", fontSize: "20px" }}>{item.name}</h2>
            <p style={{ color: "#555", margin: "10px 0" }}>{item.price}</p>
           <Link href={`/products/${item.slug}`}>Buy Now</Link>

          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
