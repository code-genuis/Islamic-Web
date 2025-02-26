import type { Metadata } from "next";
import Header from "../../component/common/Header";
// import Footer from "../../component/common/Footer";
import ContactBtn from "../../component/ui/ContactBtn";

export const metadata: Metadata = {
  title: "Tajweed Course | UstazPortal",
  description: "This is a Tajweed Courses page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <ContactBtn />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}