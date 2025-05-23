import Lottie from "lottie-react";
import loadingAnimation from "../../assets/Animation/spiner.json"; // adjust path if needed

const Loader = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white dark:bg-gray-900">
      <Lottie
        animationData={loadingAnimation}
        loop
        autoplay
        className="w-[200px] h-[200px]"
      />
    </div>
  );
};

export default Loader;
