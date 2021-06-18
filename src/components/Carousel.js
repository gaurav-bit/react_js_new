function Carousel(){
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                {/* <img src="https://rukminim1.flixcart.com/flap/3376/560/image/4d2296592328ef3e.jpg?q=50" className="d-block w-100" alt="..."/> */}
                    <img src="/images/1.jpeg" className="d-block w-100" alt="..." height="450"/>
                </div>
                <div className="carousel-item">
                {/* <img src="https://rukminim1.flixcart.com/flap/844/140/image/dbe2b58113882267.jpg?q=50" className="d-block w-100" alt="..."/> */}
                    <img src="/images/2.jpg" className="d-block w-100" alt="..." height="450"/>
                </div>
                <div className="carousel-item">
                {/* <img src="https://rukminim1.flixcart.com/flap/1688/280/image/b091815857a92b86.jpg?q=50" className="d-block w-100" alt="..."/> */}
                    <img src="/images/3.jpeg" className="d-block w-100" alt="..." height="450"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
      </div>
    )
}

export default Carousel;