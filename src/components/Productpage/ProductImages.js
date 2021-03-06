import {useEffect, useState} from 'react'

export default function ProductImages({images: {images}}) {
    const [mainImage, setMainImage] = useState(images[0].url)
    const changeMainImage = (e) => {
        setMainImage(e.target.src)
    }
    useEffect(() => {
        setMainImage(images[0].url)
    }, [images])
    return (
        <div className="productpage-images-cont">
           <div className="productpage-images-scroll">
                {
                    images.map((image, index) => (
                        <div className="productpage-small-image" key={index}>
                            <img src={image.url} className="productpage-image-small" onClick={changeMainImage}/>
                        </div>
                    ))
                }
            </div>
            
            <div className="productpage-images-main">
                <img src={mainImage} className="productpage-image-choosed"/>
            </div>            
        </div>
    )
}