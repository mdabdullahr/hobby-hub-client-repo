import Banner from '../../components/Banner/Banner.jsx'

const Home = () => {
  return (
    <div className="mb-10">
      <Banner></Banner>
      <section className="my-10 lg:my-20 w-11/12 lg:w-10/12 mx-auto min-h-screen">
        <h2 className="text-2xl text-orange-500 md:text-4xl lg:text-5xl specific-text text-center font-bold">Featured Groups</h2>
        <p className="text-center text-sm md:text-lg lg:text-xl mt-5 text-gray-600 max-w-7xl mx-auto">Featured Groups are handpicked ongoing hobby or interest groups from our platform, specially curated for you. Here, you’ll find active members collaborating, making new friends, and growing their skills together. These groups represent the heart and enthusiasm of our community. Join your favorite group now to learn something new and have fun!

</p>
      </section>

       <section className="bg-gray-100 py-12 px-4 text-center max-w-4xl mx-auto rounded-xl mb-12">
    <h3 className="text-2xl font-semibold mb-4">আমাদের কমিউনিটি ইভেন্টে অংশ নিন</h3>
    <p className="text-gray-700 max-w-xl mx-auto">
      ওয়ার্কশপ, মিটআপ ও সামাজিক অনুষ্ঠানগুলোতে অংশগ্রহণ করুন।  
      এই অনুষ্ঠানগুলো নতুন বন্ধু তৈরির ও দক্ষতা বাড়ানোর জন্য আদর্শ।
    </p>
  </section>

       <section className="bg-white py-12 px-4 text-center max-w-4xl mx-auto rounded-xl shadow-lg mb-12">
    <h3 className="text-2xl font-semibold mb-4">নিজের গ্রুপ শুরু করুন</h3>
    <p className="text-gray-700 max-w-xl mx-auto">
      আপনার প্যাশন শেয়ার করতে চান? নিজে একটি গ্রুপ তৈরি করুন এবং অন্যদের আমন্ত্রণ জানান।  
      আমরা আপনার কমিউনিটি পরিচালনা ও বৃদ্ধির জন্য প্রয়োজনীয় সব টুলস দিচ্ছি।
    </p>
  </section>
    </div>
  );
};

export default Home;
