import "../globals.css";
import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar";

export const metadata = {
  title: "Lorem Hotel Dashboard",
  description: "Created by @ozcaneren",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  );
}
