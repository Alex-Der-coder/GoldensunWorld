import { L, bg } from "./legacy";

// Bloc de la colonne droite : en-tête image + fond + bas arrondi
function RightBlock({ id, header, height, children }: { id: string; header: string; height: number; children: React.ReactNode }) {
  return (
    <table border={0} cellPadding={0} cellSpacing={0} summary="membres" width={130} bgcolor="#1A4F84" id={id}>
      <tbody>
        <tr><td><img src={L(header)} width={130} height={height} style={{ border: 0 }} alt="" /></td></tr>
        <tr><td style={bg("back_right2.gif")}>{children}</td></tr>
        <tr><td><img src={L("botright.gif")} width={130} height={20} style={{ border: 0 }} alt="" /></td></tr>
      </tbody>
    </table>
  );
}

// Ouvre une popup comme l'original (window.open), sans JS inline
function Popup({ href, name, w, h, children, className }: { href: string; name: string; w: number; h: number; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} target={name} className={className} data-popup={`${w}x${h}`}>{children}</a>
  );
}

export default function RightColumn() {
  return (
    <>
      <RightBlock id="birthday" header="topright_07.gif" height={48}>
        <table width="93%" border={0} cellPadding={0} cellSpacing={0} align="center"><tbody><tr>
          <td className="menu" align="center">
            <table width={114} border={0} cellPadding={0} cellSpacing={0}><tbody><tr>
              <td><center>Aucun.</center></td>
            </tr></tbody></table>
          </td>
        </tr></tbody></table>
      </RightBlock>

      <RightBlock id="jukebox" header="topright_06.gif" height={48}>
        <table width="93%" border={0} cellPadding={0} cellSpacing={0} align="center"><tbody><tr>
          <td className="menu" align="center">
            <table width={114} border={0} cellPadding={0} cellSpacing={0}><tbody><tr>
              <td><center>
                <Popup href="/site_jukeflash" name="jukebox" w={301} h={151} className="disabled"><span style={{ color: "#000000" }}>Jukebox (v. Flash)</span></Popup>
                <br />
                <Popup href="/site_juke" name="jukebox" w={302} h={153} className="disabled"><span style={{ color: "#000000" }}>Jukebox (v. PHP)</span></Popup>
              </center></td>
            </tr></tbody></table>
          </td>
        </tr></tbody></table>
      </RightBlock>

      <RightBlock id="member-zone" header="topright_05.gif" height={30}>
        <table width="95%" border={0} cellPadding={0} cellSpacing={0} align="right"><tbody><tr>
          <td className="menu">
            <form action="/users/sign_in" acceptCharset="UTF-8" method="post">
              <input type="hidden" name="authenticity_token" value="" autoComplete="off" />
              <center>
                <b>
                  <label htmlFor="user_login"><span style={{ fontSize: "x-small" }}>Pseudo :</span><br /></label>
                  <input className="input" size={10} autoComplete="username" type="text" name="user[login]" id="user_login" />
                  <br />
                  <label htmlFor="user_password"><span style={{ fontSize: "x-small" }}>Mot de Passe :</span><br /></label>
                  <input className="input" size={10} autoComplete="current-password" type="password" name="user[password]" id="user_password" />
                  <br />
                  <input autoComplete="off" value="1" type="hidden" name="user[remember_me]" id="user_remember_me" />
                  <input type="submit" name="commit" value="Se connecter" className="input_submit" />
                </b>
              </center>
            </form>
            <div style={{ textAlign: "right" }}><span style={{ fontSize: "x-small" }}><a href="/users/password/new">Oubli de mot de passe ?</a></span></div>
            <br />
            <center>
              <a href="/list_membre" className="disabled"><span style={{ fontSize: "x-small" }}>Liste des membres</span></a><br />
              <a href="/list_membre_attente" className="disabled"><span style={{ fontSize: "x-small" }}>Membres en attente</span></a>
            </center>
          </td>
        </tr></tbody></table>
      </RightBlock>

      <img src={L("botmiddle.gif")} width={130} height={10} style={{ border: 0 }} alt="" /><br />
      <table cellPadding={2} cellSpacing={0} width={130} bgcolor="#99CCFF" style={{ border: "1px solid", height: 120 }} id="dialbox-info">
        <tbody><tr>
          <td align="center">
            Ouvrir la Dialbox en :<br />
            <Popup href="/dialbox?size=1" name="dial_box" w={500} h={450}>Petite taille (640x480)</Popup><br />
            <Popup href="/dialbox?size=2" name="dial_box2" w={500} h={570}>Moyenne taille (800x600)</Popup><br />
            <Popup href="/dialbox?size=3" name="dial_box3" w={500} h={738}>Grande taille (1024x768)</Popup><br />
            <br />
            Connecté(s) : <b></b>
          </td>
        </tr></tbody>
      </table>

      <table border={0} cellPadding={0} cellSpacing={0} summary="affiliés" width={130} id="affiliate">
        <tbody>
          <tr><td><img src={L("topright_01.gif")} width={130} height={50} style={{ border: 0 }} alt="" /></td></tr>
          <tr><td style={bg("back_right2.gif")}>
            <table width="93%" border={0} cellPadding={0} cellSpacing={0} align="center"><tbody><tr>
              <td className="menu">
                &nbsp;&nbsp;
                <span style={{ fontFamily: "Verdana" }}>
                  <span className="raquo"><b>&raquo;</b></span>{" "}
                  <a href="/site/affiliation" className="menu disabled" rel="nofollow">Affiliation</a>
                </span>
                <br /><br />
                <center>
                  <span style={{ fontSize: "x-small" }}><a href="http://www.aw-experience.com/" target="_blank">AW Experience</a><br /></span>
                </center>
              </td>
            </tr></tbody></table>
          </td></tr>
          <tr><td><img src={L("botright.gif")} width={130} height={20} style={{ border: 0 }} alt="" /></td></tr>
        </tbody>
      </table>
    </>
  );
}
