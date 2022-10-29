import ace1 from "./photos/ace_1.jpg";
import ace2 from "./photos/ace_2.jpg";
import ace3 from "./photos/ace_3.jpg";
import ace4 from "./photos/ace_4.jpg";
import ace6 from "./photos/ace_6.jpg";
import ace7 from "./photos/ace_7.jpg";
import ace8 from "./photos/ace_8.jpg";

export default function PhotoCarousel() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={ace1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={ace3} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={ace2} alt="Third slide" />
          </div>
          <div className="carousel-item ">
            <img className="d-block w-100" src={ace6} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={ace4} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={ace8} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={ace7} alt="First slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
