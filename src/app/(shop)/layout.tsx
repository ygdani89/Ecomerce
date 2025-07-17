import {TopMenu, SideBar, Footer} from "@/components/index";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <main className="min-h-screen ">
      {" "}
      <TopMenu/>
      <SideBar/>
    
      

      <div className="px-0 sm:px-10">
      

      {children}
      </div>
      <Footer/>
    </main>
    
    </>
  );
}
