import Link from "next/link"; 
export default function About() {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: "40px",
          color: "green",
          fontWeight: "bold",
        }}
      >
    E-commerce site
      </h1>
      <Link href="/" style={{margin:'20px'}}>Home</Link>
    </div>
  );
}
