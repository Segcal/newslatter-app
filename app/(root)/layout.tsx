import Navbar from "@/components/layout/home/Navbar";


export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <main className=" min-h-screen  bg-[#0D0A1B]">
    <Navbar />
    {children}
   </main>
  );
}
