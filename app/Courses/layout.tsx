import type { Metadata } from "next";
import Header from "../component/common/Header";
import Footer from "../component/common/Footer";
<<<<<<< HEAD
import ContactBtn from "../component//ui/ContactBtn";
=======
import ContactBtn from "../component/ui/ContactBtn";
>>>>>>> 4f5dfe3 (first commit)

export const metadata: Metadata = {
  title: "Courses | UstazPortal",
  description: "This is a Courses page.",
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
        <Footer />
      </body>
    </html>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 4f5dfe3 (first commit)
