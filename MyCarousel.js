import React  from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Catagries from './Catagries'
import Slider from "react-slick";
import '../Containers/MyCarousel.css'


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "rgb(181, 178, 178)" , borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "rgb(181, 178, 178)", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

export default function MyCarousel(){
// const [Products , setProducts] = useState(Catagries)
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  className: "center",
  centerMode: true,
  centerPadding: "60px",
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
  return(
    <div className="Carasoel">
      <div className="MyCaraosel">
        <Slider {...settings}>
        {Catagries.map((e) => {
          return <div className="Card" key={e.id}>
              <div className="Card-top text-center">
                <div className="Card-image"><img src={e.image} alt=""/></div>
                <h5>{e.Desc}</h5>
              </div>
          </div>
        })}
        </Slider>
      </div>
      </div>
    
  )
} 