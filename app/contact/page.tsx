import Link from "next/link"; 
export default function Contact() {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: "40px",
          fontWeight: "bold",
           color: "darkGreen",
        }}
      >
    Contact Here.
      </h1>
       <Link href="/" style={{margin:'20px'}}>Home</Link>
    </div>
  );
}
