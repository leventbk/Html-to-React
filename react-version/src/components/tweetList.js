import React from "react";
import tweet from "./tweet";

function TweetList() {
  return (
    <main className="container">

    <section className="tweets">
      <article className="tweet">
        <header className="tweet--header">
          <img className="tweet--avatar" src={tweet.avatar}/>
          <h2 className="tweet--name">{tweet.name}</h2>
          <small className="tweet--handle">{tweet.handle}</small>
        </header>

        <div className="tweet--body">{tweet.body}</div>

        <footer className="tweet--footer">
          <small className="footer--age">{tweet.age}<small>
              <span className="footer--actions">
                <a href="#"><i className="fa fa-flag"></i></a>
                <a href="#"><i className="fa fa-retweet"></i></a>
                <a href="#"><i className="fa fa-heart"></i></a>'
              </span>
            </small></small></footer>
      </article>
      <article className="tweet">
        <header className="tweet--header">
          <img className="tweet--avatar" src="https://i.imgur.com/nlhLi3I.png"/>
          <h2 className="tweet--name">Descartes</h2>
          <small className="tweet--handle">@rd</small>
        </header>

        <div className="tweet--body">
          <p>Je pense , donc je suis</p>
        </div>

        <footer className="tweet--footer">
          <small className="footer--age">10 days ago<small>
              <span className="footer--actions">
                <a href="#"><i className="fa fa-flag"></i></a>
                <a href="#"><i className="fa fa-retweet"></i></a>
                <a href="#"><i className="fa fa-heart"></i></a>'
              </span>
            </small></small></footer>
      </article>

    </section>
  </main>
  );
}

export default TweetList;