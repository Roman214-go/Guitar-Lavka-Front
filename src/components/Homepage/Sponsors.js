import anuenue from '../../assets/img/homepage/sponsors/anuenue.svg'
import kepma from '../../assets/img/homepage/sponsors/kepma.svg'
import elixir from '../../assets/img/homepage/sponsors/elixir.svg'
import joyo from '../../assets/img/homepage/sponsors/joyo.svg'
import godin from '../../assets/img/homepage/sponsors/godin.svg'
import kremona from '../../assets/img/homepage/sponsors/kremona.svg'
import maton from '../../assets/img/homepage/sponsors/maton.svg'
import tom from '../../assets/img/homepage/sponsors/tom.svg'
import enya from '../../assets/img/homepage/sponsors/enya.svg'
import sigma from '../../assets/img/homepage/sponsors/sigma.svg'
export default function Sponsors() {
    return (
        <div className="homepage-sponsors">
            <div className="homepage-sponsor">
            <img src={anuenue} />
            </div>
            <img src={kepma} />
            <img src={elixir} />
            <img src={joyo} />
            <img src={godin} />
            <img src={kremona} />
            <img src={maton} />
            <img src={tom} />
            <img src={enya} />
            <img src={sigma} />
        </div>
    )
}