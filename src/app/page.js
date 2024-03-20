import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import MainContainer from "@/components/MainContainer";

export default function Home() {
  return (
    <Container className="h-[80vh]">
      <MainContainer className="h-full grid grid-cols-2 items-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-8xl font-bold">Creative Thoughts Agency.</h1>
          <p>Lorem, ipsum door sit amet consectetur adispisicing elit. Vero blanditiis adipisci minima reiciendis a autem assumenda dolore.</p>
          <div className="flex gap-4">
            <Link href="/about" className="py-4 px-8 bg-blue-500 hover:bg-blue-700 transition-colors rounded-md">Learn More</Link>
            <Link href="/contact" className="py-4 px-8 bg-slate-200 hover:bg-slate-300 text-black transition-colors rounded-md">Contact</Link>
          </div>
          <div className="grayscale cursor-pointer">
            <Image src="/brands.png" alt="brands" width={400} height={100}/>
          </div>
        </div>
        <div className="cursor-pointer">
          <Image src="/hero.gif" alt="hero" width={500} height={500}/>
        </div>
      </MainContainer>
    </Container>
  );
}
