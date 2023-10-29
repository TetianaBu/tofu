import { Jura } from "next/font/google";
import "./globals.css";
import { APPTITLE } from "../constants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jura = Jura({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: { APPTITLE },
  description: "Page about tofu and Tofciunio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jura.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
