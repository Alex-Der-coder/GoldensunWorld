import type { Metadata } from "next";
import "./globals.css";
import LeftMenu from "@/components/LeftMenu";
import RightColumn from "@/components/RightColumn";
import PopupLinks from "@/components/PopupLinks";
import { L, bg } from "@/components/legacy";

export const metadata: Metadata = {
  title: "Golden Sun World ..-~ Version 3.3 ~-..",
  icons: {
    icon: [
      { url: "/legacy/favicon-16x16.png", sizes: "16x16" },
      { url: "/legacy/favicon-32x32.png", sizes: "32x32" },
    ],
    apple: "/legacy/apple-touch-icon-180x180.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/legacy/application.css" media="all" />
      </head>
      <body>
        <a id="top" />
        <table width={760} border={0} cellPadding={0} cellSpacing={0} id="main">
          <tbody>
            <tr>
              <td colSpan={3}><img src={L("top.jpg")} width={760} height={130} style={{ border: 0 }} useMap="#home" alt="" /></td>
            </tr>
            <tr>
              <td><img src={L("topleft_00.jpg")} width={130} height={41} style={{ border: 0 }} alt="" /></td>
              <td><img src={L("middle_bar.gif")} width={500} height={41} style={{ border: 0 }} useMap="#menu_center" alt="" /></td>
              <td><img src={L("topright_00.jpg")} width={130} height={41} style={{ border: 0 }} alt="" /></td>
            </tr>
            <tr>
              <td style={{ ...bg("back_left.jpg"), verticalAlign: "top" }}>
                <LeftMenu />
              </td>
              <td style={{ verticalAlign: "top", backgroundColor: "#FFFFFF" }}>
                <table width="100%" border={0} cellSpacing={0} cellPadding={15} style={{ height: "100%" }}>
                  <tbody>
                    <tr>
                      <td className="yield">{children}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td style={{ ...bg("back_right.jpg"), verticalAlign: "top", backgroundColor: "#1A4F84" }}>
                <RightColumn />
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <img src={L("bottom.gif")} width={760} height={16} style={{ border: 0 }} useMap="#bottom" alt="" />
                <br /><br />
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <map name="home">
          <area shape="rect" coords="8,6,294,125" href="/home" alt="Page d'Accueil" />
          <area shape="rect" coords="274,71,484,125" href="/home" alt="Page d'Accueil" />
        </map>
        <map name="bottom">
          <area shape="rect" coords="12,2,28,14" href="#top" alt="Haut" />
          <area shape="rect" coords="732,2,748,14" href="#top" alt="Haut" />
        </map>
        <map name="menu_center">
          <area shape="rect" coords="52,7,123,35" href="https://discord.gg/aSXCTEt" alt="Discord" target="_blank" />
          <area shape="rect" coords="168,8,262,38" href="http://goldensunw.free.fr/btf_project/forum.php" alt="Forum" target="_blank" />
          <area shape="rect" coords="310,6,446,38" href="/site/guestbook" alt="Livre d'Or" />
        </map>
        <PopupLinks />
      </body>
    </html>
  );
}
