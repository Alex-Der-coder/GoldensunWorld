import Link from "next/link";
import { leftNav, type NavLink } from "@/lib/nav";
import { L, bg } from "./legacy";

function MenuLink({ link }: { link: NavLink }) {
  const cls = `menu${link.disabled ? " disabled" : ""}`;
  let label: React.ReactNode = link.label;
  if (link.wiki) label = <b><u>{link.label}</u></b>;
  else if (link.bold) label = <b>{link.label}</b>;

  if (!link.href) return <a className="menu">{label}</a>;
  const target = link.blank ? "_blank" : undefined;
  return link.href.startsWith("/") ? (
    <Link href={link.href} className={cls} target={target} prefetch={false}>{label}</Link>
  ) : (
    <a href={link.href} className={cls} target={target}>{label}</a>
  );
}

// Colonne gauche : un tableau de 130px par rubrique, comme l'original
export default function LeftMenu() {
  return (
    <>
      {leftNav.map((s) => (
        <table key={s.id} border={0} cellPadding={0} cellSpacing={0} summary={s.id} width={130}>
          <tbody>
            <tr>
              <td><img src={L(s.header)} width={130} height={s.headerHeight} style={{ border: 0 }} alt="" /></td>
            </tr>
            <tr>
              <td style={bg("back_left2.gif")}>
                <table width="93%" border={0} cellPadding={0} cellSpacing={0} align="right">
                  <tbody>
                    <tr>
                      <td className="menu">
                        {s.links.map((link, i) =>
                          link.right ? (
                            <div key={i} style={{ textAlign: "right" }}>
                              <MenuLink link={link} />&nbsp;&nbsp;
                            </div>
                          ) : (
                            <span key={i}>
                              <span className="raquo" style={link.wiki ? { lineHeight: "24px" } : undefined}><b>&raquo;</b></span>{" "}
                              <MenuLink link={link} />
                              {link.label !== "Trucages par :" && <br />}
                              {link.spaceAfter && <br />}
                            </span>
                          ),
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td><img src={L("botleft.gif")} width={130} height={20} style={{ border: 0 }} alt="" /></td>
            </tr>
          </tbody>
        </table>
      ))}
    </>
  );
}
