
import './Slide.css'
import img1 from "../../assets/neom-Iy59i0M7oP4-unsplash.jpg"
import img2 from "../../assets/luca-micheli-r9RW20TrQ0Y-unsplash.jpg"
import img3 from "../../assets/drif-riadh-YpkuRn54y4w-unsplash.jpg"
import img4 from "../../assets/cosmic-timetraveler-LgrGHYZzBSk-unsplash.jpg"
import img5 from "../../assets/david-rodrigo-LO14F1Yj0j0-unsplash.jpg"
import img6 from "../../assets/mesut-kaya-LcCdl__-kO0-unsplash.jpg"
import img7 from "../../assets/timur-garifov-G8TTp07zchI-unsplash.jpg"
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
const Banner = () => {
    const handleNext = () => {
        const items = document.querySelectorAll('.item');
        const slides = document.querySelector('.slide');
        slides.appendChild(items[0]);
      };


    
      const handlePrev = () => {
        const items = document.querySelectorAll('.item');
        document.querySelector('.slide').prepend(items[items.length - 1]);
      };
    return (
        <div className="container font-Exo ">
      <div className="slide">
        <div className="item" style={{ backgroundImage: `url(${img2})` }}>
          <div className="content">
            <div className="name">Tuscany</div>
            <div className="des">Hisma Desert dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${img1})` }}>
          <div className="content">
            <div className="name">Saudi Arabia</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${img3})` }}>
          <div className="content">
            <div className="name">United States</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
       
           <div className="item" style={{ backgroundImage: `url(${img4})` }}>
               <div className="content">
                   <div className="name">Costa Rica</div>
                   <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                   <button>See More</button>
               </div>
           </div>
           <div className="item" style={{ backgroundImage: `url(${img5})` }}>
               <div className="content">
                   <div className="name">Indonseia</div>
                   <div className="des">Nusa Penida, Bali!</div>
                   <button>See More</button>
               </div>
           </div>
           <div className="item"  style={{ backgroundImage: `url(${img7})` }}>
               <div className="content">
                   <div className="name">Turkey</div>
                   <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                   <button>See More</button>
               </div>
           </div>

      </div>
      <div className="button flex justify-start pl-24 ">
        <button className=" prev bg-slate-500 flex justify-center items-center mx-auto" onClick={handlePrev}>
          {/* <i className="fa-solid fa-arrow-left"></i> */}
          <div ><MdKeyboardArrowLeft></MdKeyboardArrowLeft></div>
        </button>
        <button className=" next bg-slate-500 flex justify-center items-center mx-auto" onClick={handleNext}>
          {/* <i className="fa-solid fa-arrow-right"></i> */}
          <div><MdKeyboardArrowRight></MdKeyboardArrowRight></div>
        </button>
      </div>

    </div>
    
    );
};

export default Banner;