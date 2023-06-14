import './Carousel.css'

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <ol className="carousel-indicators">
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://limcompany.com.pe/modules/wbimageslider/views/img/e16bf423a9877f08a9f45fb8320a07ebf3f1d20c_Slider8.jpg" className="d-block w-100" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img src="https://limcompany.com.pe/modules/wbimageslider/views/img/7d115b8785cd753bf3240f9399bdb0881b34f4c5_Slider9.jpg" className="d-block w-100" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img src="https://limcompany.com.pe/modules/wbimageslider/views/img/6712f1871a2019f68035011548566efdb47a4a83_Slider11.jpg" className="d-block w-100" alt="Third slide" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
