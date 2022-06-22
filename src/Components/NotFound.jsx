import { React, useEffect, useState } from "react";
function NotFound() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  if (loading) {
    return (
      <div className="Loader-Sub flex justify-center items-center">
        <lottie-player
          src="https://assets3.lottiefiles.com/packages/lf20_AQEOul.json"
          background="transparent"
          speed="1"
          style={{ width: "300px", height: "300px" }}
          loop
          autoplay
        ></lottie-player>
      </div>
    );
  }
  return (
    <>
      <div>
        <section className="flex justify-center items-center">
          <lottie-player
            src="https://assets1.lottiefiles.com/private_files/lf30_cgfdhxgx.json"
            background="transparent"
            speed="1"
            style={{ width: "25%" }}
            loop
            autoplay
          ></lottie-player>
        </section>
      </div>
    </>
  );
}
export default NotFound;
