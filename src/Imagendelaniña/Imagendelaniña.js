import './Imagendelaniña.css'
import img from '../image/niñaleyendo.png'

export function Imagendelaniña(){
    return(
        <div className='niñaleyendo'>
            <img  width={280} src={img} alt='imagen de una niña'/>
        </div>
    )
}
