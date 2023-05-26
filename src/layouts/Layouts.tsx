import Footer from "@/components/widgets/footer/Footer";
import Navbar from "@/components/widgets/navbar/Navbar";
import Head from "next/head";

type props = {
  title?: string;
  children: React.ReactNode;
};

export default function Layouts({
  title = "Kisahnesia | Cerita Rakyat Indonesia",
  children,
}: props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
