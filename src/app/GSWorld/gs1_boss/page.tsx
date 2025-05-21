import Image from "next/image";
import Boss from "../../assets/boss.gif"
import Fight1 from "../../assets/fight1.gif"
import Fight2 from "../../assets/fight2.gif"
import Fight3 from "../../assets/fight3.gif"
import Fight4 from "../../assets/fight4.gif"
import Fight5 from "../../assets/fight5.gif"
import Fight6 from "../../assets/fight6.gif"
import Fight7 from "../../assets/fight7.gif"
import Fight8 from "../../assets/fight8.gif"
import Fight9 from "../../assets/fight9.gif"
import Fight10 from "../../assets/fight10.gif"
import Fight11 from "../../assets/fight11.gif"
import Fight12 from "../../assets/fight12.gif"
import Fight13 from "../../assets/fight13.gif"
import Fight14 from "../../assets/fight14.gif"
import Fight15 from "../../assets/fight15.gif"
import Fight16 from "../../assets/fight15b.gif"

export default function Home() {
    return (

<div className="yield">
    <center>
    <Image src={Boss} width="81" height="39" alt="test"  />
    </center>
    <br/><br />
    <p>Voici les boss que vous allez affronter dans Golden
    Sun. Cliquez sur les image pour les agrandir.</p><br /><br />
    <table className="border-2 border-solid"  align="center"   width="425" cellSpacing="0" cellPadding="1">
    <tbody><tr>
      <td className="border-2 border-solid" width="74"><b>Nom</b></td>
      <td className="border-2 border-solid" width="60"><b>Faiblesse</b></td>
      <td className="border-2 border-solid" width="133"><b>Bonus</b></td>
      <td className="border-2 border-solid" width="123"><b>Infos</b></td>
      <td className="border-2 border-solid" width="123"><b>Screen</b></td>
    </tr>
    <tr >
      <td className="border-2 border-solid" width="74" >
      <p>Inconnu<br />
        &amp;<br />
        Inconnue </p>
      </td>
      <td className="border-2 border-solid" width="60">?!?</td>
      <td className="border-2 border-solid" width="133">Rien</td>
      <td className="border-2 border-solid" width="123">Le jeu est conçu pour que vous perdiez...</td>
      <td className="border-2 border-solid" width="123"><a href="#"><Image src={Fight1} width="120" height="80" alt="test" /></a></td>
    </tr>
    <tr >
      <td className="border-2 border-solid" width="74" align="center">
      <p>Voleur<br />
        Brigan<br />
        Voleur <br />
      </p>
      </td>
      <td className="border-2 border-solid" >Terre</td>
      <td className="border-2 border-solid">Cimeterre</td>
      <td className="border-2 border-solid" >&nbsp;</td>
      <td className="border-2 border-solid" ><a href="#" ><Image src={Fight2}  width="120" height="80" alt="test" /></a></td>
    </tr>
    <tr >
      <td className="border-2 border-solid" width="74">
      <p>Salamandar</p>
      </td>
      <td className="border-2 border-solid">Eau</td>
      <td className="border-2 border-solid">Cristal psy</td>
      <td className="border-2 border-solid" >&nbsp;</td>
      <td className="border-2 border-solid" ><a href="#"><Image src={Fight3}  width="120" height="80" alt="test" /></a></td>
    </tr>
    <tr >
      <td className="border-2 border-solid" width="74" >
      <p>tret</p>
      </td>
      <td className="border-2 border-solid">Feu</td>
      <td className="border-2 border-solid">potion</td>
      <td className="border-2 border-solid" >&nbsp;</td>
      <td className="border-2 border-solid"><a href="#" > <Image src={Fight4}  width="120" height="80" alt="test" /></a></td>
    </tr>
    <tr >
      <td className="border-2 border-solid" width="74">
      <p>Orang-outang</p>
      </td>
      <td className="border-2 border-solid" >Feu</td>
      <td className="border-2 border-solid">Goutte</td>
      <td className="border-2 border-solid" >&nbsp;</td>
      <td className="border-2 border-solid" ><a href="#" ><Image src={Fight5}  width="120" height="80" alt="test" /></a></td>
    </tr>
    <tr >
      <td className="border-2 border-solid" width="74">
      <p>Hydro-statue</p>
      </td>
      <td className="border-2 border-solid">Feu</td>
      <td className="border-2 border-solid" >porte-bonheur</td>
      <td className="border-2 border-solid">&nbsp;</td>
      <td className="border-2 border-solid" ><a href="#"> <Image src={Fight6} width="120" height="80" alt="test" /></a></td>
    </tr>
    <tr >
      <td className="border-2 border-solid" width="74" >
      <p>Manticore</p>
      </td>
      <td className="border-2 border-solid" >Eau</td>
      <td className="border-2 border-solid">Cristal psy</td>
      <td className="border-2 border-solid">Double attaque</td>
      <td className="border-2 border-solid" ><a href="#"> <Image src={Fight7} width="120" height="80" alt="test" /></a></td>
    </tr>
    <tr >
      <td className="border-2 border-solid" width="74" >
      <p>Kraken</p>
      </td>
      <td className="border-2 border-solid" >Feu</td>
      <td className="border-2 border-solid" >Eau Jouvence</td>
      <td className="border-2 border-solid" >Double attaque</td>
      <td className="border-2 border-solid" ><a href="#" ><Image src={Fight8} width="120" height="80" alt="test" /></a></td>
    </tr>
    <tr >
      <td className="border-2 border-solid" width="74" >
      <p>Azart</p>
      </td>
      <td className="border-2 border-solid" >Terre</td>
      <td className="border-2 border-solid" >Rien</td>
      <td className="border-2 border-solid" >&nbsp;</td>
      <td className="border-2 border-solid" ><a href="#" ><Image src={Fight9} width="120" height="80" alt="test" /></a></td>
    </tr>
    <tr >
      <td className="border-2 border-solid"  width="74" >
      <p>Satrage</p>
      </td>
      <td className="border-2 border-solid" >Terre</td>
      <td className="border-2 border-solid" >Rien</td>
      <td className="border-2 border-solid" >&nbsp;</td>
      <td className="border-2 border-solid" ><a href="#" ><Image src={Fight10} width="120" height="80" alt="test" /></a></td>
    </tr>
    <tr >
      <td className="border-2 border-solid"  width="74" >
      <p>Navampa</p>
      </td>
      <td className="border-2 border-solid" >Terre</td>
      <td className="border-2 border-solid">Rien</td>
      <td className="border-2 border-solid" >&nbsp;</td>
      <td className="border-2 border-solid" ><a href="#" ><Image src={Fight11} width="120" height="80" alt="test" /></a></td>
    </tr>
    <tr >
      <td className="border-2 border-solid"  width="74" >
      <p>Craposaure</p>
      </td>
      <td className="border-2 border-solid" >Feu</td>
      <td className="border-2 border-solid" >Cristal psy</td>
      <td className="border-2 border-solid" >Soin 80 PV</td>
      <td  className="border-2 border-solid" ><a href="#" ><Image src={Fight12} width="120" height="80" alt="test" /></a></td>
    </tr>
    <tr >
      <td className="border-2 border-solid"  width="74" >
    Dinosouffle
      </td>
      <td className="border-2 border-solid" >Terre</td>
      <td className="border-2 border-solid" >Cristal psy</td>
      <td className="border-2 border-solid" >Double attaque</td>
      <td className="border-2 border-solid" ><a href="#" ><Image src={Fight13} width="120" height="80" alt="test"/></a></td>
    </tr>
    <tr >
      <td className="border-2 border-solid"  width="74" >
      <p>Warrax</p>
      </td>
      <td className="border-2 border-solid" >Terre</td>
      <td className="border-2 border-solid" >Eau-jouvence</td>
      <td className="border-2 border-solid" >Double attaque</td>
      <td className="border-2 border-solid" ><a href="#"><Image src={Fight14} width="120" height="80" alt="test"/></a></td>
    </tr>
    <tr >
      <td className="border-2 border-solid"  width="74" >
      <p>Salamandar phoenixia </p>
      </td>
      <td className="border-2 border-solid" >Eau</td>
      <td className="border-2 border-solid" >Rien</td>
      <td className="border-2 border-solid" >&nbsp;</td>
      <td className="border-2 border-solid" ><a href="#"><Image src={Fight15} width="120" height="80" alt="test"/></a></td>
    </tr>
    <tr >
      <td className="border-2 border-solid" width="74" >
      <p>Dragon fusion</p>
      </td>
      <td className="border-2 border-solid" >Eau</td>
      <td className="border-2 border-solid" >&nbsp;</td>
      <td className="border-2 border-solid">Double attaque</td>
      <td className="border-2 border-solid" ><a href="#" ><Image src={Fight16} width="120" height="80" alt="test"/></a></td>
    </tr>
    </tbody></table>
    <p>La double attaque signifie que l&apos;adversaire attaque
    deux fois par tour.</p>
    <p>Le craposaure regagne 80 PV par tour (un peu comme les
    gobelins).</p>
    <p>&nbsp;</p>
    <p>Je ne vous ai pas mis de stratégie spécifique
    pour les vaincre, car le jeu perdrait tout son intérêt. Et
    à quoi ça sert d&apos;acheter le jeu si nous jouons à
    votre place ?!? =Þ</p>
    <p>&nbsp;</p>
    <p >page réalisée
    par pyroclasme</p>
          </div>

        );
    }