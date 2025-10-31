import Link from "next/link"; 

interface ProductSlugProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductSlug({ params }: ProductSlugProps) {
  const { slug } = await params; 

      return (
    <div>
      <Link href="/" style={{ margin: "20px" }}>Home</Link>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Product: {slug}</h1>
        <p>This is the detail page for {slug}.</p>
      </div>
    </div>
  );
}