const SideBar = () => {
  return (
    <div>
      <div>
        <h1 className="bg-teal-900">মাননীয় প্রধান উপদেষ্টা</h1>
        <img className="h-24 w-24 p-1" src="myimage.jpg" />
        <h3>ড. মুহাম্মদ ইউনূস</h3>
        <h3>মাননীয় প্রধান উপদেষ্টা</h3>
        <a href="#" class="no-underline hover:underline ...">
          বিস্তারিত
        </a>
      </div>
      <div>
        <h1 className="bg-teal-900">সচিব </h1>
        <img className="h-24 w-24 p-1" src="image2.jpg" />
        <h3>নাজমুল আহসান</h3>
        <h3>ক্যারিয়ার সিভিল সার্ভেন্ট জনাব নাজমুল আহসান ১৫ ডিসেম্বর ২০</h3>
        <h3>সচিব</h3>
        <a href="#" class="no-underline hover:underline ...">
          বিস্তারিত
        </a>
      </div>

      <div className="w-full h-1/5 bg-teal-900">
        <p>কেন্দ্রীয় ই-সেবাসমূহ</p>
      </div>
    </div>
  );
};

export default SideBar;
