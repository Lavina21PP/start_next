import type { Metadata } from "next";
import {
  Noto_Sans_Thai,
  Noto_Sans_Lao,
  IBM_Plex_Sans_Thai,
  Roboto,
} from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import "./globals.css";

type Props = {
  children: React.ReactNode;
};

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"], // เพิ่ม thai เผื่อใช้
  weight: ["400", "500", "700"],
});
const notoThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  variable: "--font-thai",
  weight: ["400", "500", "700"],
});
const ibmThai = IBM_Plex_Sans_Thai({
  variable: "--font-ibm-thai",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "700"],
});
const notoLao = Noto_Sans_Lao({
  variable: "--font-lao",
  subsets: ["lao", "latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "My App",
  description: "Next.js + Lao font demo",
};

export default async function RootLayout({ children }: Props) {
  return (
    <html>
      <body
        className={`${notoThai.variable} ${ibmThai.variable} ${notoLao.variable} ${roboto.variable} antialiased`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
