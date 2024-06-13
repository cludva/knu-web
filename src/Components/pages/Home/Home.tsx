import "./Home.scss";
import Navbar from "../../Navbar/Navbar";
// import ImageSlider from "../../ImageSlider/ImageSlider";
import Hero from "../../Hero/Hero"
import img1 from "../../../assets/img1.jpeg";
import img2 from "../../../assets/img2.jpeg";
import img3 from "../../../assets/img3.jpeg";
import img4 from "../../../assets/img4.jpeg";
import img5 from "../../../assets/img5.jpeg";
import News from "../../News/News";

const Home = () => {
  const IMAGES = [img1, img2, img3, img4, img5];
  return (
    <>
      <Navbar />
      <Hero />
      <News />
      <div className="">
      {/* <ImageSlider imageUrls={IMAGES} /> */}
      </div>
    </>
  );
};

export default Home;
