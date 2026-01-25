import GridContainer from "@/components/layout/GridContainer";

export default function LegalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GridContainer>
      <div className="pt-10">
        {children}
      </div>
    </GridContainer>
  );
}
