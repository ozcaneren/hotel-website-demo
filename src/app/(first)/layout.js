import "../globals.css";
import { Header, Footer } from "@/components";

export const metadata = {
  title: "Lorem Hotel",
  description: "Created by @ozcaneren",
};

export default function RootLayout({ children }) {
  

  return (
    <html lang="en">
      <body className="">
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
