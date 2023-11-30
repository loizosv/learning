function mapInSlices(array, sliceSize, sliceFunc) {
    const out = [];
    for (let i=0; i<array.length; i+=sliceSize) {
      const slice = array.slice(i, i + sliceSize);
      out.push(sliceFunc(slice, i));
    }
    return out;
}

export default function SlideShow(props){
    return(
        <div className="container-gallery">
            <div className="image-gallery">
                {mapInSlices(props.images, 2, (slice, sliceIndex) => (
                    <div key={sliceIndex} className="col">
                    {slice.map((src,index) => (
                        <div key={index} className="image-item">
                            <img className="d-block w-100" src={src} />
                            <div className="overlay"><span>Image title</span></div>
                        </div>
                    ))}
                    </div>
                ))}
            </div>
        </div>
    )
}