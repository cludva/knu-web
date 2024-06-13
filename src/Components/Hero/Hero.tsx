import "./Hero.scss";
import image from "../../assets/knu.jpeg";
import firstCardImage from "../../assets/knu-card-teaser-image.jpeg";
import secondCardImage from "../../assets/card-second-img.jpeg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-main">
          <img className="hero-img" src={image} alt="" />
          <div className="image-caption">
            <div className="contents">
              <h2 className="caption-title">
                <Link className="link" id="">
                  КУУнун миссиясы -
                </Link>{" "}
              </h2>
              <div className="caption-text">
                классикалык жана инновациялык жетишкендиктерге таянып, <br />
                университеттин билим берүү, илимий потенциалын сактап, өөрчүтүү.
              </div>
            </div>
          </div>
        </div>
        <div className="parent-of-separator">
          <div className="sub-hero-separator">
            <div className="sub-hero-line"></div>
          </div>
        </div>
        <div className="sub-heros">
          <article className="news-teaser">
            <Link className="card-content">
              <div className="card-img">
                <img className="cardImage" src={firstCardImage} alt="" />
              </div>
              <div className="card-section">
                <h3 className="card-title">
                  <span className="title-hover">
                    Ректор Түштүк Кореялык <br />“We Daba Lab” борборунун<br /> өкүлү
                  </span>
                </h3>
                <p className="card-text">
                  2024-жылдын 4-июнь күнү ректор Төлөбек Абдырахманов Түштүк
                  Кореялык “We Daba Lab” борборунун өкүлү, математика жана
                  информатика факультетинин студенттери үчүн уюштурулган “Python
                </p>
              </div>
            </Link>
          </article>
          <article className="news-teaser">
            <Link className="card-content">
              <div className="card-img">
                <img className="cardImage" src={secondCardImage} alt="" />
              </div>
              <div className="card-section">
                <h3 className="card-title">
                  <span className="title-hover">
                    КУУда дүйнөлүк “Кытай тили – достук көпүрөсү”
                  </span>
                </h3>
                <p className="card-text">
                  Иш чарага кадырлуу конок катары Кытай Эл Республикасынын
                  Кыргыз Республикасындагы Атайын жана Ыйгарым укуктуу элчиси Ду
                </p>
              </div>
            </Link>
          </article>
        </div>
      </div>
    </>
  );
};

export default Hero;
