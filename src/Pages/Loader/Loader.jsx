import Lottie from "lottie-react";
import loadingAnimation from "../../assets/Animation/spiner.json"; // adjust path if needed

const Loader = () => {
  return (
     <div className="min-h-screen flex justify-center items-center bg-white dark:bg-gray-900">
      <Lottie
        animationData={loadingAnimation}
        loop
        autoplay
        style={{ height: 200, width: 200 }}
      />
    </div>
  );
};

export default Loader;
