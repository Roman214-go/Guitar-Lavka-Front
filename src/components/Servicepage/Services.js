import changeFrets from "../../assets/img/servicepage/changing-strings.png"
import painting from "../../assets/img/servicepage/painting.png"
import restovration from "../../assets/img/servicepage/restovration.png"
import service from "../../assets/img/servicepage/service.png"
import Service from "./Service"

export default function Services() {
    const changeStringsInfo = {
        title: "Changing Frets",
        description: [
            "Replacing frets on guitars with a removable neck (with seaming and polishing) - 150 $",
            "Replacement of frets on guitars with non-removable neck (with seaming and polishing) - 200 $",
            "Our workshop produces a full cycle of fretboard repairs. Starting from fret work, such as facing, seaming, grinding, polishing, to a complete neck repair with replacement of frets, fingerboard and anchor. All work is carried out using certified technologies and qualified experienced craftsmen. You can also replace worn nuts, or improve the sound of your instrument by installing bone or brass nuts."
        ],
        image: changeFrets
    }
    const paintingInfo = {
        title: "Painting",
        description: [
            "Lacquering the soundboard of an acoustic guitar - 100 $",
            "Coating with matte varnish - from 30 $", 
            "Coating with glossy lacquer - from 50 $", 
            "Headstock repainted (matte varnish) - from 30 $", 
            "Headstock repaint (glossy lacquer) - from 40 $", 
            "Fretboard painting (matte lacquer) - from  50 $", 
            "Fretboard painting (glossy lacquer) - from 80 $", 
            "Guitar body painting (matte lacquer) - from 200 $", 
            "Guitar body painting (glossy lacquer) - from 250 $",
            "Painting a guitar with a non-removable neck (pasted or through, matte varnish) - 200 $"
        ],
        image: painting,
    }
    const restovrationInfo = {
        title: "Restovration",
        description: [
            "Polishing light damage to the paintwork - from 40 $",
            "Gluing the headstock - from 50 $",
            "Gluing the headstock with reinforcement - from 100 $",
            "Gluing a deck - from 30 $",
            "Plywood stand - from 40 $",
            "Production of a new stand* - 30 $",
            "Gluing the neck heel with reinforcement - 50 $",
            "Acoustic guitar spring gluing - 30 $",
            "Acoustic guitar deck replacement* - 500 $",
            "Acoustic guitar body gluing - from 50 $"
        ],
        image: restovration
    }
    const currentServiceInfo = {
        title: "Current service",
        description: [
            "Diagnostics and consultation - FREE OF CHARGE",
            "String replacement with fretboard cleaning and oil impregnation - 10 $",
            "String replacement with fretboard cleaning and oil impregnation + fret polishing - 20 $",
            "Comprehensive cleaning of acoustic/bass/electric guitars - 10 $",
            "Acoustic/Bass/Electric Guitar Tuning without Floyd Rose -40 $",
            "Floyd Rose Electric Guitar Tuning - 40 $",
            "Urgent setting** - 60 $",
            "Polishing of frets with cleaning of the lining oil impregnation - 20 $",
           "Grinding frets (with seaming and polishing) - 55 $"
        ],
        image: service
    }
    return (
        <div className="services-cont">
            <Service info={currentServiceInfo}/>
            <Service info={restovrationInfo}/>
            <Service info={paintingInfo}/>
            <Service info={changeStringsInfo}/>
        </div>
    )
}