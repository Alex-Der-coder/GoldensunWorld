import top from "./assets/topleft_00-74724d290c511e8a4c7903e4536968321e3771b452cddcfb2b70f82e2a638149.jpg"
import menu from "./assets/middle_bar-0108a3e0ddff931ad18767e67ee01cda1ca8cfd138cbd7f40c540477dd0cbf5e.gif"
import Image from 'next/image';
import header from "./assets/top-3c6933a10204be69479c4ee25a488467f19160ca2937098c4afff8140a48c886.jpg"
import './globals.css'
import Right from "./assets/topright_00-f59e4ae6d9bbf483bb290079a11f9a516a9c4f4484a2743e58c8db894368d515.jpg"
import GS3 from "./assets/topleft_05-5b749c2f232825811105f8fdbf7609d20e75d944a1ae1a978f6ff05469b6d64b.gif"
import boftleft from "./assets/botleft-c4a0bf219c6f34e16587411e57d1599ff479ff43d12c8fa61cd332ad413e57b4.gif"
import Topleft2 from "./assets/topleft_02-9e3cf31c94dc0770520631dee33860c51012e6c510ecfc12bc43d7b860593e96.gif"
import Topleft1 from "./assets/topleft_01-674bb222d913d7440197eeca9be18802372651ad78078422343aed5a0b7b3504.gif"
import Topleft3 from "./assets/topleft_03-a5498542bc8038ec00e5d537659b9ab96f3c1bbf7e959c081f4aa186c0efd8b3.gif"
import Topleft4 from "./assets/topleft_04-6ff66b27a7136bb50047008ddb92236a7279fee884fdbb6555af2bad032723ef.gif"
import Topleft6 from "./assets/topright_06-b2b63b0bdb70a2ca1bc45268d34df3da8ebe2df02ecf82e8dfc6cf335bc3d273.gif"
import Topleft7 from "./assets/topright_07-7e229d39a6ea89a59832b876d307d454777d7d87f8c4a36544ecb8e4156314e0.gif"
import Boftright from "./assets/botright-56321663ab2431a94970e8211d501096b312577bd7160e3e2cfb8fb5d3f6fee5.gif"
import Topright5 from "./assets/topright_05-7b1a5a6ec98f7f1d76cf891336560f92b59911f6ed6b0d7f3b7ca9dcbd9827ef.gif"
import TopRight1 from "./assets/topright_01-d733dc4f21afcf5674215d7b015b30a2e62da08b7f96e43a86078ce0cbb23a3e.gif"
import Bothmidle from "./assets/botmiddle-d582f2e9bfe9ce6f3336088cecfc73d7725dd320ec513dfcb14b67066907931d.gif"
import Bottom from "./assets/bottom-53c5921ab113530539c843e774c03899353cc7eddf040b9e7d33fd0b4f41cde3.gif"
import Link from 'next/link'

export default function RootLayout({

  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en"  >
      <body>
      <div>
      <table  id="main" >
        <tbody suppressHydrationWarning={true}>
          <tr>
            <td colSpan={3}>
              <Image src={header} width={760} height={130} alt="Header Image" />
            </td>
          </tr>
          <tr>
    <td>
      <Image src={top} width="130" height="41" alt="top Image"  />
      </td>
    <td>
      <Image src={menu} width="500" height="41"  useMap="#menu_center" alt="Menu bar image" />
      </td>
    <td>
      <Image src={Right} width="130" height="41"  alt="test A"/>
      </td>
  </tr>

  <tr>
  <td style={{backgroundImage: `url(https://res.cloudinary.com/df1z0o9nt/image/upload/v1711311968/Goldensunworld/back_left2-f7ac5c659e9060a7482b98ac133e05629d39f053b2c6ab8656adb300528fb831_t7kugz.gif)`}} valign="top">
    <table cellPadding="0" cellSpacing="0" summary="goldensun3" width="130">
      <tbody>
        <tr>
          <td><Image alt="ojp" src={GS3} width="130" /></td>
        </tr>
        <tr>
          <td style={{backgroundImage: `url("https://res.cloudinary.com/df1z0o9nt/image/upload/v1711311968/Goldensunworld/back_left2-f7ac5c659e9060a7482b98ac133e05629d39f053b2c6ab8656adb300528fb831_t7kugz.gif")`}}>
            <table width="93%" cellPadding="0" cellSpacing="0" align="right">
              <tbody>
                <tr>
                  <td className="menu">
                    <span className="raquo" style={{ lineHeight: '24px' }}><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/http://wiki.goldensun-world.com/index.php/Golden_Sun_:_Obscure_Aurore" className="menu disabled" target="_blank"><b><u>Voir le Wiki</u></b></a><br/><br/>
                    <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs3_personnages" className="menu disabled">Personnages</a><br/>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td><Image alt="correction"  src={boftleft } width="130" height="20"  /></td>
        </tr>
      </tbody>
    </table>

    <table  cellPadding="0" cellSpacing="0" summary="goldensun2" width="130">
  <tbody><tr>
    <td><Image alt="test" src={Topleft2} width="130" height="32"  /></td>
  </tr>
  <tr>
    <td style={{backgroundImage: `url(https://res.cloudinary.com/df1z0o9nt/image/upload/v1711311968/Goldensunworld/back_left2-f7ac5c659e9060a7482b98ac133e05629d39f053b2c6ab8656adb300528fb831_t7kugz.gif)`}}>
      <table width="93%"  cellPadding="0" cellSpacing="0" align="right">
        <tbody><tr>
          <td className="menu">
            <span className="raquo"  style={{ lineHeight: '24px' }}><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/http://wiki.goldensun-world.com/index.php/Golden_Sun_:_l%27%C3%82ge_Perdu" className="menu disabled" target="_blank"><b /><u>Voir le Wiki</u><b /></a><br />
            <span className="raquo"><b>»</b></span> <Link className="menu" href="/GS2/info">Test / Infos Jeu</Link><br />
            <span className="raquo"><b>»</b></span><Link className="menu" href="/GS2/histoire">Histoire</Link><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs2_personnages" className="menu">Personnage</a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs2_soluce" className="menu"><b>Soluce</b></a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs2_quetedesanimaux" className="menu"><b>Quête des animaux </b></a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs2_liste_maitres_elem" className="menu"><b>Maîtres Elém.</b></a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/guide_tactique" className="menu"><b>Guide tactique</b></a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs2_psynergie" className="menu">Psynergie</a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs2_cheatcode" className="menu">Astuces</a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs2_gameshark" className="menu">Game Shark / AR</a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs2_invocation" className="menu">Invocations</a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs2_djinn_list" className="menu">Djinn</a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs2_classes" className="menu">Classes</a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs2_items_classes" className="menu">Item Classes</a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs2_shop" className="menu">Shop</a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs2_item" className="menu">Objets</a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs2_fontaine" className="menu">Objets fontaine</a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs2_armes" className="menu">Armes</a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs2_armures" className="menu">Armures</a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs2_reliques" className="menu">Reliques</a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs2_forgeron" className="menu">Le Forgeron</a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs2_marais_taopo" className="menu">Marais de Taopo</a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs2_meilleur_equipement" className="menu">Meilleur Equipement</a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs2_carte" className="menu">Carte du Monde</a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs2_boss" className="menu">Boss</a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs2_codeacces" className="menu">Code de Sauvegarde</a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs2_cinematique" className="menu">Cinématiques</a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs2_faq" className="menu">FAQ</a><br />
          </td>
        </tr>
      </tbody></table>
    </td>
  </tr>
  <tr>
    <td><Image alt="test"  src={boftleft} width="130" height="20" /></td>
  </tr>
</tbody></table>


<table  cellPadding="0" cellSpacing="0" summary="goldensun" width="130">
  <tbody><tr>
    <td><Image alt="test" src={Topleft1} width="130" height="32" /></td>
  </tr>
  <tr>
    <td style={{backgroundImage: `url(https://res.cloudinary.com/df1z0o9nt/image/upload/v1711311968/Goldensunworld/back_left2-f7ac5c659e9060a7482b98ac133e05629d39f053b2c6ab8656adb300528fb831_t7kugz.gif)`}}>
      <table width="93%"  cellPadding="0" cellSpacing="0" align="right">
        <tbody><tr>
          <td className="menu">
          <span className="raquo" style={{ lineHeight: '24px' }}><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/http://wiki.goldensun-world.com/index.php/Golden_Sun_:_le_Sceau_Bris%C3%A9" className="menu disabled" target="_blank"><b><u>Voir le Wiki</u></b></a><br />
          <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs1_histoire" className="menu">Histoire</a><br/>
          <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs1_info" className="menu">Info Jeu</a><br />
          <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs1_perso" className="menu">Personnages</a><br />
          <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs1_soluce" target="_blank" className="menu"><b>Soluce</b></a><br/>
          <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs1_ileauxpirates" className="menu"><b>Île aux pirates</b></a><br/>
          <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/files/vlad" className="menu" target="_blank">Master Files</a><br/>
          <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs2_psynergie" className="menu">Psynergie</a><br/>
          <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs1_cheatcode" className="menu">Astuces</a><br/>
          <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs1_gameshark" className="menu">Game Shark / AR</a><br/>
          <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs2_invocation" className="menu">Invocations</a><br/>
          <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs1_djinn_tuto" className="menu">Djinn</a>
          <br/>
          <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs1_classes" className="menu">Classes</a><br/>
          <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs1_shop" className="menu">Shop</a><br/>
          <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs1_item" className="menu">Objets</a><br/>
          <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs1_armes" className="menu">Armes
          </a><br/>
          <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs1_armures" className="menu">Armures</a>
          <br/>
          <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs1_reliques" className="menu">Reliques (armes)</a><br/>
          <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs1_reliques2" className="menu">Reliques (armures)</a><br/>
          <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs1_reliques2#anneaux" className="menu">Reliques (anneaux)</a><br/>
          <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs1_meilleur_equipement" className="menu">Meilleur Equipmnt</a><br/>
          <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs1_carte" className="menu">Carte du Monde</a><br/>
          <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs1_boss" className="menu">Boss</a><br/>
          <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs1_codeacces" className="menu">Code Sauvegarde</a><br/>
          <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs1_boxart" className="menu">Box Art</a><br/>

          </td>
        </tr>
      </tbody></table>
    </td>
  </tr>
  <tr>
    <td><Image alt="test"  src={boftleft } width="130" height="20" /></td>
  </tr>
</tbody></table>

<table  cellPadding="0" cellSpacing="0" summary="myuluchimedia" width="130">
  <tbody><tr>
    <td><Image alt="test"  src={Topleft3} width="130" height="32" /></td>
  </tr>
  <tr>
    <td style={{backgroundImage: `url(https://res.cloudinary.com/df1z0o9nt/image/upload/v1711311968/Goldensunworld/back_left2-f7ac5c659e9060a7482b98ac133e05629d39f053b2c6ab8656adb300528fb831_t7kugz.gif)`}}>
      <table width="93%"  cellPadding="0" cellSpacing="0" align="right">
        <tbody><tr>
          <td className="menu">
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/http://udanworld.free.fr/GSE/wtf.php" className="menu">Golden Sun Editor</a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/art/wallpaper" className="menu">Wallpaper</a><br/>
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/art/artwork" className="menu">Artworks</a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs1_decors" className="menu">Backgrounds GS1</a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs2_decors" className="menu">Backgrounds GS2</a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/art/msn" className="menu">Icones MSN/AIM</a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/art/soundtrack" className="menu">Soundtrack</a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/art/video" className="menu">Vidéo</a><br/>
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs1_save" className="menu">Sauvegardes GS1</a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/gs2_save" className="menu">Sauvegardes GS2</a><br />
            <span className="raquo"><b>»</b></span> <a className="menu">Trucages par :</a>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}><a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/art/trucages" className="menu">Cristali</a>&nbsp;&nbsp;</div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}><a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/art/trucages2" className="menu">Darthange</a>&nbsp;&nbsp;</div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}><a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/art/trucages3" className="menu">Crush40</a>&nbsp;&nbsp;</div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}><a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/art/trucages4" className="menu">Yarma</a>&nbsp;&nbsp;</div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}><a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/art/trucages5" className="menu">Skywalker</a>&nbsp;&nbsp;</div>
          </td>
        </tr>
      </tbody></table>
    </td>
  </tr>
  <tr>
    <td><Image alt="test" src={boftleft} width="130" height="20" /></td>
  </tr>
</tbody></table>

<table  cellPadding="0" cellSpacing="0" summary="saito" width="130">
  <tbody><tr>
    <td><Image src={Topleft4} width="130" height="32" alt="test" /></td>
  </tr>
  <tr>
    <td  >
      <table width="93%"  cellPadding="0" cellSpacing="0" align="right">
        <tbody><tr>
          <td className="menu">
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/art_fanart.php" className="menu disabled">Fan Art</a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/art_fanfic.php" className="menu disabled">Fan Fic</a><br/>
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/dialbox" className="menu" target="_blank">Dialbox</a><br />
            <span className="raquo"><b>»</b></span> <a className="menu disabled" href="#">Chan</a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/site/guestbook" className="menu disabled">Livre d&apos;Or</a><br/>
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/site_awards.php" className="menu disabled">Awards</a><br/>
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/ekip.php" className="menu disabled">Les Webmasters</a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/ekip_modo.php" className="menu disabled">Les Modérateurs</a><br />
            <span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/ekip_remerciement.php" className="menu disabled">Remerciements</a><br />
          </td>
        </tr>
      </tbody></table>
    </td>
  </tr>
  <tr>
    <td><Image src={boftleft} width="130" height="20" alt="test"  /></td>
  </tr>
</tbody></table>
  </td>
  

  <td style={{ height: '200px', marginLeft: '100%', display: 'block' }} valign="top" >
<table  cellPadding="0" cellSpacing="0" summary="membres" width="130" bgcolor="#1A4F84" data-turbolinks-permanent="" id="birthday">
  <tbody><tr>
    <td><Image src={Topleft7}  width="130" height="48" alt="test" /></td>
  </tr>
  <tr>
    <td style={{ 
    backgroundImage: "url('https://res.cloudinary.com/df1z0o9nt/image/upload/v1711402486/Goldensunworld/back_right2-4a54527ed18ad6bf83b570ca74d1655b4ac6bd91c8e8128af2e3b1db7820188e_sm7tgm.gif')",}}>
      <table width="93%" cellPadding="0" cellSpacing="0" align="center">
        <tbody><tr>
          <td className="menu" align="center">
            <table width="114"   cellPadding="0" cellSpacing="0">
              <tbody><tr>
                <td>
                  <center>
                    Aucun.
                  </center>
                </td>
              </tr>
            </tbody></table>
          </td>
        </tr>
      </tbody></table>
    </td>
  </tr>
  <tr>
    <td><Image  src={Boftright} width="130" height="20" alt="test" /></td>
  </tr>
</tbody></table>

<table  cellPadding="0" cellSpacing="0" summary="membres" width="130" bgcolor="#1A4F84" data-turbolinks-permanent="" id="jukebox">
  <tbody><tr>
    <td><Image src={Topleft6}   width="130" height="48" alt="test" /></td>
  </tr>
  <tr>
    <td style={{ 
    backgroundImage: "url('https://res.cloudinary.com/df1z0o9nt/image/upload/v1711402486/Goldensunworld/back_right2-4a54527ed18ad6bf83b570ca74d1655b4ac6bd91c8e8128af2e3b1db7820188e_sm7tgm.gif')",}}>
     
      <table width="93%"  cellPadding="0" cellSpacing="0" align="center">
        <tbody><tr>
          <td className="menu" align="center">
            <table width="114"  cellPadding="0" cellSpacing="0">
              <tbody><tr>
                <td><center>
                  <a href="#" className="disabled">Jukebox (v. Flash)</a>
                  <br/>
                  <a href="#"  className="disabled">Jukebox (v. PHP)</a></center>
                </td>
              </tr>
            </tbody></table>
          </td>
        </tr>
      </tbody></table>
    </td>
  </tr>
  <tr>
    <td><Image  src={Boftright} width="130" height="20" alt="test G"  /></td>
  </tr>
</tbody></table>

<table  cellPadding="0" cellSpacing="0" summary="membres" width="130" bgcolor="#1A4F84" data-turbolinks-permanent="" id="member-zone">
  <tbody><tr>
    <td><Image  src={Topright5}  width="130" height="30" alt="test" /></td>
  </tr>
  <tr>
    <td style={{ 
    backgroundImage: "url('https://res.cloudinary.com/df1z0o9nt/image/upload/v1711402486/Goldensunworld/back_right2-4a54527ed18ad6bf83b570ca74d1655b4ac6bd91c8e8128af2e3b1db7820188e_sm7tgm.gif')",}}>
      <table width="95%"  cellPadding="0" cellSpacing="0" align="right">
        <tbody><tr>
          <td className="menu">
              <form action="/web/20230128105537/https://v3.goldensun-world.com/users/sign_in"  method="post" ><input name="utf8" type="hidden" value="✓" /><input type="hidden" name="authenticity_token" value="GTbabOaeQbyH8vMO5+OR457xlmHldjB8j75213MFgOeM6mjIv5pmR+LpWzDrQc87iSMBaEqmJ67nLvjSjXKh4w=="  />
<center>
  <b>
    <label htmlFor="user_login">
      Pseudo :<br/>
</label>    <input className="input" size={10} autoComplete="username" type="text" name="user[login]" id="user_login" />
    <br/>
    <label htmlFor="user_password">
      Mot de Passe :<br/>
</label>    <input className="input" size={10} autoComplete="current-password" type="password" name="user[password]" id="user_password" />
    <br/>
    <input value="1" type="hidden" name="user[remember_me]" id="user_remember_me" />
    <input type="submit" name="commit" value="Se connecter" className="input_submit" data-disable-with="Se connecter" />
  </b>
</center>
</form><div style={{ display: 'flex', justifyContent: 'flex-end' }}><a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/users/password/new">Oubli de mot de passe ?</a></div>


            <br />
            <center>
              <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/list_membre.php" className="disabled">Liste des membres</a><br/>
              <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/list_membre_attente.php" className="disabled">Membres en attente</a>
            </center>
          </td>
        </tr>
      </tbody></table>
    </td>
  </tr>
  <tr>
    <td><Image src={Boftright} width="130" height="20" alt="test E" /></td>
  </tr>
</tbody></table>


<Image  src={Bothmidle}  width="130" height="10"  alt="Test" /><br/>
<Image  src={Bothmidle}  width="130" height="10" alt="patchwork done" style={{ marginBottom: '-11px', marginTop: '-11px' }}/><br />
<table cellPadding="2" cellSpacing="0" width="130" bgcolor="#99CCFF" style={{ border: '1px solid' , height: '120'}} id="dialbox-info">
  <tbody><tr>
    <td align="center">
      Ouvrir la Dialbox en :<br /><a href="#" >Grande taille (1024x768)</a><br/>
    <br/>
      Connecté(s) : <b></b>
    </td>
  </tr>
</tbody></table>

<table  cellPadding="0" cellSpacing="0" summary="affiliés" width="130" data-turbolinks-permanent="" id="affiliate">
  <tbody><tr>
    <td><Image src={TopRight1} width="130" height="50" alt="test C" /></td>
  </tr>
  <tr>
    <td style={{ 
    backgroundImage: "url('https://res.cloudinary.com/df1z0o9nt/image/upload/v1711402486/Goldensunworld/back_right2-4a54527ed18ad6bf83b570ca74d1655b4ac6bd91c8e8128af2e3b1db7820188e_sm7tgm.gif')",}}>
      <table width="93%"  cellPadding="0" cellSpacing="0" align="center">
        <tbody><tr>
          <td className="menu">
            &nbsp;&nbsp;<span className="raquo"><b>»</b></span> <a href="http://web.archive.org/web/20230128105537/https://v3.goldensun-world.com/affiliation.php" className="menu disabled">Affiliation</a>
            <br/><br/>
            <center>
              <a href="http://web.archive.org/web/20230128105537/http://www.aw-experience.com/" target="_blank">AW Experience</a><br/>
            </center>
          </td>
        </tr>
      </tbody></table>
    </td>
  </tr>
  <tr>
    <td><Image src={Boftright}  width="130"  height="868"  alt="test B"/>
    <Image  src={Bothmidle}  width="130" height="10" alt="patchwork done" style={{ height: '942px' }}/><br />
    </td>
  </tr>

</tbody></table>
</td>
<td>{children}</td>

</tr>
<tr>
    <td colSpan={3}  style={{ backgroundColor: "#1a4f84" }}><Image src={Bottom} width="760" height="16"   alt="final flash"/>
<br/><br/></td>
  </tr>
        </tbody>

      </table>



    </div>
      </body>
    </html>
  )
}