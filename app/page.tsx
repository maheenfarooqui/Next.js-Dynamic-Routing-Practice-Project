import Link from 'next/link';

export default function Home() {
  return (
   <div><h1 style={{textAlign:'center', marginTop:'20px',fontSize:'40px', fontWeight:'bold'}}>Welcome</h1>
   
         <div style={{display:'flex', color:'darkgreen', alignItems:'center', justifyContent:'center',gap:'30px', marginTop:'40px'}}>
          <Link href="/about">About</Link>
         <Link href="/contact">Contact</Link>
         <Link href="/products">Products</Link>
         </div>
   
   </div>
  );
}
