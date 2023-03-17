import { useState } from "react";
import { FaAngleRight,FaAngleLeft } from "react-icons/fa";

const images = [
  require("../images/image-product-1-thumbnail.jpg"),
  require("../images/image-product-2-thumbnail.jpg"),
  require("../images/image-product-3.jpg"),
  require("../images/image-product-4.jpg"),
];
const Home = ({ setItem }) => {
  const [imageSrc, setimageSrc] = useState(
    require("../images/image-product-1-thumbnail.jpg")
  );
  const [imageId, setImageId] = useState("");
  const [imageIndex, setImageIndex] = useState(0);
  const [items, setItems] = useState(0);


  const handleImageClick = (event) => {
    const imgId = event.target.id;
    setImageId(imgId);
    const src = event.target.src;
    setimageSrc(src);
  };
  const handleIncrement = () => {
    setItems(items + 1);
    setItem((prevItems) => prevItems + 1);
  };
  const handleDecrement = () => {
    setItems(items - 1);
    setItem((prevItems) => prevItems - 1);
  };

  const handleRightArrowClick = () => {
    const nextIndex = (imageIndex + 1) % images.length;
    setImageIndex(nextIndex);
    setimageSrc(images[nextIndex]);
  };

  const handleLeftArrowClick = () => {
    const prevIndex = (imageIndex - 1 + images.length) % images.length;
    setImageIndex(prevIndex);
    setimageSrc(images[prevIndex]);
  };

  return (
    <section className="">
      <div className="block md:flex mt-2 md:mt-12 lg:space-x-24">
        <div>
          <div className="w-full h-80 md:w-80 bg-slate-400 rounded-md">
            <img
              className=" h-full w-full object-cover md:h-80 md:w-80 md:rounded-md"
              src={imageSrc}
              alt="Shoes"
            />
            <FaAngleRight  onClick={handleRightArrowClick} size={26} className='absolute md:hidden top-56 right-0  sm:right-16 cursor-pointer'/>
            <FaAngleLeft onClick={handleLeftArrowClick} size={26} className='absolute md:hidden top-56 cursor-pointer' />
          </div>
        </div>
        <div className="px-10">
          <p className=" text-orange-500 pt-7">Sneakers Company</p>
          <h2 className="text-3xl font-bold pt-2">
            Fall Limited Edition <br /> Sneakers
          </h2>
          <p className="pb-2 pt-4 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            rerum nisi quibusdam id eligendi a dolore fuga ab esse excepturi
            omnis rerum nisi quibusdam id eligendi a dolore
          </p>

          <div className="flex space-x-5 mt-2">
            <p className="text-2xl font-bold ">$125.00</p>
            <p className="mt-1 rounded-lg  bg-slate-200 px-2 h-6  text-orange-500">
              50%
            </p>
          </div>
          <p className="mt-1 text-gray-500 text-sm">$250.00</p>
          <div className="md:flex space-x-2 pt-3">
            <div className="flex w-60 md:w-44 rounded h-auto bg-gray-300 justify-between p-2 py-2 mb-2 ml-2">
              <button
                onClick={handleDecrement}
                className=" text-orange-500 text-xl"
                disabled={items === 0}
              >
                -
              </button>
              <h2 className=" text-xl">{items}</h2>
              <button
                onClick={handleIncrement}
                className=" text-orange-500 text-xl"
              >
                +
              </button>
            </div>
            <div>
              <button
                type="submit"
                className="bg-orange-500 w-60 py-2 md:w-48 rounded-md shadow-xl shadow-orange-200"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex mt-1 space-x-5">
        <div
          className={`${
            imageId === "1" ? "opacity-60" : ""
          } w-14 h-14 rounded bg-slate-500"`}
        >
          <img
            id="1"
            className="w-14 h-14 rounded"
            src={require("../images/image-product-1-thumbnail.jpg")}
            alt="Shoes"
            onClick={handleImageClick}
          />
        </div>
        <div
          className={`${
            imageId === "2" ? "opacity-60" : ""
          } w-14 h-14 rounded bg-slate-500"`}
        >
          <img
            id="2"
            className="w-14 h-14 rounded"
            src={require("../images/image-product-2-thumbnail.jpg")}
            onClick={handleImageClick}
            alt=""
          />
        </div>
        <div
          className={`${
            imageId === "3" ? "opacity-60" : ""
          } w-14 h-14 rounded bg-slate-500"`}
        >
          <img
            id="3"
            className="w-14 h-14 rounded"
            src={require("../images/image-product-3.jpg")}
            alt=""
            onClick={handleImageClick}
          />
        </div>
        <div
          className={`${
            imageId === "4" ? "opacity-60" : ""
          } w-14 h-14 rounded bg-slate-500"`}
        >
          <img
            id="4"
            className="w-14 h-14 rounded"
            src={require("../images/image-product-4.jpg")}
            alt=""
            onClick={handleImageClick}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
