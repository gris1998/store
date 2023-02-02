import './cards.css'
import muñequeram from '../../assets/muñequeram.jpg'
import collarinb from '../../assets/collarincervicalblando.jpg'
import muñequeraf from '../../assets/Munequeraf.jpg'
import collarins from '../../assets/collarins.jpg'
import rodilleran from '../../assets/rodilleran.png'
import rodilleram from '../../assets/Rodilleram.jpg'
import termometro from '../../assets/termometro.jpg'


export function Cards() {
 
  return (
 
 <div className='container'>

<div className="card1">
  <div className="imgm">
    <img src={muñequeram} alt="" />
  </div>
<p className='texto'>MUÑEQUERA  MILITAR</p>
  <div className="space">
  <span>52.000</span>
  <a href='#' className='bt' >agregar</a>
</div>
</div>


<div className="card1">
  <div className="imgcb">
    <img src={collarinb} alt="" />
  </div>
<p className='texto'>COLLARIN CERVICAL BLANDO</p>
  <div className="space">
  <span>72.000</span>
  <a href='#' className='bt' >agregar</a>
</div>
</div>

<div className="card1">
  <div className="imgtf">
    <img src={muñequeraf} alt="" />
  </div>
<p className='t'>MUÑEQUERA TIPO FERULA-TUNEL CARPIANO</p>
  <div className="space">
  <span>52.000</span>
  <a href='#' className='bt' >agregar</a>
</div>
</div>

<div className="card1">
  <div className="imgcs">
    <img src={collarins} alt="" />
  </div>
<p className='t'>COLLARIN CERVICAL-SEMIRIGIDO-Orthia-cc2 </p>
  <div className="space">
  <span>72.000</span>
  <a href='#' className='bt' >agregar</a>
</div>
</div>

<div className="card1">
  <div className="imgrn">
    <img src={rodilleran} alt="" />
  </div>
<p className='texto'>RODILLERA DE NEOPRENO</p>
  <div className="space">
  <span>72.000</span>
  <a href='#' className='bt' >agregar</a>
</div>
</div>

<div className="card1">
  <div className="imgrmn">
    <img src={rodilleram} alt="" />
  </div>
<p className='texto'>RODILLERA MILITAR-NEOPRENO</p>
  <div className="space">
  <span>72.000</span>
  <a href='#' className='bt' >agregar</a>
</div>
</div>


<div className="card1">
  <div className="td">
    <img src={termometro} alt="" />
  </div>
<p className='texto'>TERMOMETRO LASER INFRARROJO-DE DISTANCIA</p>
  <div className="space">
  <span>72.000</span>
  <a href='#' className='bt' ><p className='textos'>agregar</p></a>
</div>
</div>
 </div>
  );
}
