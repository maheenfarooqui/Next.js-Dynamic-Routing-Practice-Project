"use client";
import Link from "next/link"; 
import { useParams } from "next/navigation";




export default  function ProductSlug(){
  const params = useParams(); 

      return (
    <div>
      <Link href="/" style={{ margin: "20px" }}>Home</Link>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Product: {params.slug}</h1>
        <p>This is the detail page for {params.slug}.</p>
      </div>
    </div>
  );
}