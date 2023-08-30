import React from "react";

function TweetForm() {
  const placeholder = "What are you humming about?";
  return (
    <main className="container">

    <section className="newtweet">
      <form method="post" action="/tweets" className="newtweet__form">
        <textarea className="form__textarea" name="text" placeholder={placeholder}></textarea>
        <input type="submit" value="Tweet" className="form__input"/>
        <span className="form__counter">140</span>
      </form>
    </section>

    <div className="round-btn">
      <i className="round-btn__icon fas fa-angle-double-up"></i>
    </div>
  </main>
  );
}

export default TweetForm;