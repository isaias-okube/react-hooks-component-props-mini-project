import React from "react";

function Article({title, date, preview, minutes}) {
    const defaultDate = "January 1, 1970";

    return (
        <article>
            <h3>{title}</h3>
            <small>{date || defaultDate}</small>
            <p>{preview}</p>
            <small>{getReadingTimeEmojis(minutes)} {minutes} min read</small>
        </article>
    
    )
}

function getReadingTimeEmojis(minutes) {
    const coffeeCup = "☕️";
    const bentoBox = "🍱";
  
    if (minutes < 30) {
      const coffeeCups = Math.ceil(minutes / 5);
      return coffeeCup.repeat(coffeeCups);
    } else {
      const bentoBoxes = Math.ceil(minutes / 10);
      return bentoBox.repeat(bentoBoxes);
    }
  }
  

export default Article;