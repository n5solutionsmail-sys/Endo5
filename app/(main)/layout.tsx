import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GridContainer from "@/components/layout/GridContainer";
import Chatbot from "@/components/Chatbot";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GridContainer>
      <Header />
      <main>{children}</main>
      <Footer />
      <Chatbot />
    </GridContainer>
  );
}
