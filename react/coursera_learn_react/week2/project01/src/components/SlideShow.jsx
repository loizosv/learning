function mapInSlices(array, sliceSize, sliceFunc) {
    const out = [];
    for (var i = 0; i < array.length; i += sliceSize) {
      const slice = array.slice(i, i + sliceSize);
      out.push(sliceFunc(slice, i));
    }
    return out;
}

export default function SlideShow(props){

    return(
        <div class="container-gallery">
            <div class="image-gallery">
                {mapInSlices(props.images, 2, (slice) => (
                    <div class="col">
                    {slice.map((src,index) => (
                        <div key={index} className={`image-item`}>
                            <img className="d-block w-100" src={src} />
                            <div class="overlay"><span>Image title</span></div>
                        </div>
                    ))}
                    </div>
                ))}
            </div>
        </div>
    )
}