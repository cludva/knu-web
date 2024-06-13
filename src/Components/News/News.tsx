import { Link } from "react-router-dom";
import img1 from "../../assets/teacher.jpeg";
import img2 from "../../assets/manas.jpeg";
import img3 from "../../assets/license.jpeg";
import img4 from "../../assets/awards.jpeg";
import img5 from "../../assets/meeting.jpeg";
import img6 from "../../assets/vacancy.jpeg";
import "./News.scss";

const News = () => {
  return (
    <>
      <div className="content-tile">
        <div className="news-list">
          <h2>University News</h2>
        </div>
        <div className="content-tile-grid">
          <article className="card-news-teaser">
            <Link className="teaser-card-wrapper">
              <div className="card-brand-bar"></div>
              <div className="img-container">
                <img src={img1} alt="" />
              </div>

              <div className="news-card-section">
                <h3 className="news-card-title">
                  <span className="card-title-hover">
                    Республикалык “Мыкты тарбиячы-2024” кароо сынагынын
                    жыйынтыгы чыгарылды
                  </span>
                </h3>
                <p className="news-card-text">
                  2024-жылдын 10-июнь күнү башкы имараттагы чоң жыйындар залында
                  “Мугалим” илимий-педагогикалык журналынын 10 жылдыгына карата
                  өткөрүлгөн республикалык “Мыкты тарбиячы” кароо сынагынын
                  жыйынтыгы чыгарылып, жеңүүчүлөргө сыйлыктар тапшырылды.
                </p>
              </div>
            </Link>
          </article>

          <article className="card-news-teaser">
            <Link className="teaser-card-wrapper">
              <div className="brand-bar"></div>
              <div className="img-container">
                <img src={img2} alt="" />
              </div>
              <div className="news-card-section">
                <h3 className="news-card-title">
                  <span className="card-title-hover">
                    И.Ч.Исамидинов атындагы ПКМДИде “Манас” өргөсү ачылды
                  </span>
                </h3>
                <p className="news-card-text">
                  2023-жылдын 28-майында И.Ч.Исамидинов атындагы педагогикалык
                  кадрларды максаттуу даярдоо институтунда “Манас” өргөсү
                  ачылды. Иш чарага КУУнун ректору Төлөбек Абдрахманов катышып,
                  куттуктоо сөзүндө институттун эмгек жамаатына ыраазычылыгын
                  айтып, ийгилик каалады.
                </p>
              </div>
            </Link>
          </article>

          <article className="card-news-teaser">
            <Link className="teaser-card-wrapper">
              <div className="brand-bar"></div>
              <div className="img-container">
                <img src={img3} alt="" />
              </div>
              <div className="news-card-section">
                <h3 className="news-card-title">
                  <span className="card-title-hover">
                    КУУда билим берүү ишмердүүлүгүн лицензиялоо боюнча
                    эксперттер окуудан өттү
                  </span>
                </h3>
                <p className="news-card-text">
                  2024-жылдын 27-майында башкы имараттаны чоң жыйындар залында
                  билим берүү ишмердүүлүгүн лицензиялоо боюнча эксперттер үчүн
                  семинар болуп өттү.
                </p>
              </div>
            </Link>
          </article>

          <article className="card-news-teaser">
            <Link className="teaser-card-wrapper">
              <div className="brand-bar"></div>
              <div className="img-container">
                <img src={img4} alt="" />
              </div>
              <div className="news-card-section">
                <h3 className="news-card-title">
                  <span className="card-title-hover">
                    Сыйлыктар боюнча эксперттик комиссиянын отуруму болуп өттү
                  </span>
                </h3>
                <p className="news-card-text">
                  Жакында КУУнун сыйлыктары боюнча эксперттик комиссиянын
                  отуруму болуп өттү. Жыйында түзүмдөр тарабынан 11 номинация
                  боюнча сунушталган талапкерлердин документтери каралып,
                  татыктуулар тандалды жана буйрук чыгаруу үчүн ректорго
                  сунушталды.
                </p>
              </div>
            </Link>
          </article>

          <article className="card-news-teaser">
            <Link className="teaser-card-wrapper">
              <div className="brand-bar"></div>
              <div className="img-container">
                <img src={img5} alt="" />
              </div>
              <div className="news-card-section">
                <h3 className="news-card-title">
                  <span className="card-title-hover">
                    Окуу иштери боюнча проректор Синьцзян педагогикалык
                    университетинин ректору менен жолугушту
                  </span>
                </h3>
                <p className="news-card-text">
                  2024-жылдын 29-май күнү окуу иштери боюнча проректор Жеңиш
                  Бексултанов Синьцзян педагогикалык университетинин ректору
                  Уманьцзян Айли мырза менен жолугушуп, эки университеттин
                  ортосундагы кызматташтыкты мындар ары өркүндөтүү маселелерин
                  талкуулашты.
                </p>
              </div>
            </Link>
          </article>

          <article className="card-news-teaser">
            <Link className="teaser-card-wrapper">
              <div className="brand-bar"></div>
              <div className="img-container">
                <img src={img6} alt="" />
              </div>
              <div className="news-card-section">
                <h3 className="news-card-title">
                  <span className="card-title-hover">
                    Улуттук университетте “Ачык эшиктер күнү” жана “Вакансиялар
                    жарманкеси” өткөрүлдү
                  </span>
                </h3>
                <p className="news-card-text">
                  2024-жылдын 16-май күнү башкы имаратта Бишкек шаардык иш менен
                  камсыз кылууга көмөктөшүү башкармалыгы жана Жусуп Баласагын
                  атындагы Кыргыз улуттук университети тарабынан “Ачык эшиктер
                  күнү” жана “Бош жумуш орундар жана кесиптер жарманкеси”
                  өткөрүлдү.
                </p>
              </div>
            </Link>
          </article>
        </div>
      </div>
    </>
  );
};

export default News;
