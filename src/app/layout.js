import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import localFont from "next/font/local";
// import { Inter, Roboto } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
//   adjustFontFallback: false,
// });

const roboto = localFont({
  src: "./fonts/RobotoFlex-Regular.ttf",
  display: "swap",
});

export const metadata = {
  title: "Random Company",
  description: "random comapny website description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className={"container"}>
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
