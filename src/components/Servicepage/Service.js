export default function Service({info}) {
    return (
        <div className="service">
            <div>
                <img src={info.image} />
            </div>
            <div>
                <h2>{info.title}</h2>
                <ul>
                    {
                        info.description.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}