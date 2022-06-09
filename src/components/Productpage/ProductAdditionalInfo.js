import {useState} from 'react'
export default function ProductAdditionalInfo({info: {description, characteristic, warranty}}) {
    const [infoState, setInfoState] = useState(description)
    const [isActiveDescription, setIsActiveDescription] = useState(true)
    const [isActiveCharacteristic, setIsActiveCharacteristic] = useState(false)
    const [isActiveWarranty, setIsActiveWarranty] = useState(false)
    const setDescription = () => {
        setInfoState(description)
        setIsActiveDescription(true)
        setIsActiveCharacteristic(false)
        setIsActiveWarranty(false)
    }

    const setCharacteristic = () => {
        setInfoState(characteristic)
        setIsActiveDescription(false)
        setIsActiveCharacteristic(true)
        setIsActiveWarranty(false)
    }

    const setWarranty = () => {
        setInfoState(warranty)
        setIsActiveDescription(false)
        setIsActiveCharacteristic(false)
        setIsActiveWarranty(true)
    }
    return (
        <div className="productpage-additional-info-cont">
            <div className="proudctpage-additional-info-buttons">
                <button onClick={setDescription} className={isActiveDescription ? "productpage-additional-info-button" : " "}>DESCRIPTION</button>
                <button onClick={setCharacteristic} className={isActiveCharacteristic ? "productpage-additional-info-button" : " "}>CHARASTERISTIC</button>
                <button onClick={setWarranty} className={isActiveWarranty ? "productpage-additional-info-button" : " "}>WARANTEE</button>
            </div>

            <div className="productpage-additional-info">
                {
                    Array.isArray(infoState) ? 
                    <ol>
                    {infoState.map(item => (<li>{item}</li>)) }
                    </ol>
                    :
                    <p>{infoState}</p>

                }
            </div>
        </div>
    )
}