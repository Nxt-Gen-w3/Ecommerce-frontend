import { React, useEffect } from "react";
function LatestNews() {
  return (
    <>
      <div className="container py-16">
        <h2 className="text-5xl font-extrabold mb-5">Latest News</h2>
        <section className="flex items-start">
          <img className="flex_50" src="/images/latest/b-4.jpg" alt="" />
          <article className="Latest_article flex_50"></article>
        </section>

        <section className="flex justify-between mt-6">
          <article className="flex_32 flex justify-between items-center">
            <img src="/images/latest/b-2.jpg" alt="" />
            <div className="ml-4">
              <small>10 SEP</small>
              <h4>Nullam Ullamcorper Nisl Quis Ornare Molestie</h4>
            </div>
          </article>

          <article className="flex_32 flex justify-between items-center">
            <img src="/images/latest/b-2.jpg" alt="" />
            <div className="ml-4">
              <small>10 SEP</small>
              <h4>Nullam Ullamcorper Nisl Quis Ornare Molestie</h4>
            </div>
          </article>

          <article className="flex_32 flex justify-between items-center">
            <img src="/images/latest/b-2.jpg" alt="" />
            <div className="ml-4">
              <small>10 SEP</small>
              <h4>Nullam Ullamcorper Nisl Quis Ornare Molestie</h4>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
export default LatestNews;
