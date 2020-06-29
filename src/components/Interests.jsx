import React, { Component } from 'react'

export default class Interests extends Component {
  render() {
    return (
      <div className="interests">
        <ul className="interestBox">
          <li>
            <h2>Golden Retievers</h2>
          </li>
          <li>
            <h3>
              The Golden Retriever is a medium-large gun dog that was bred to
              retrieve shot waterfowl, such as ducks and upland game birds,
              during hunting and shooting parties. The name "retriever" refers
              to the breed's ability to retrieve shot game undamaged due to
              their soft mouth. Golden retrievers have an instinctive love of
              water, and are easy to train to basic or advanced obedience
              standards.
            </h3>
          </li>
          <li>
            <img
              className="mainImg"
              src="https://things-i-like.netlify.com/images/baby_panda.jpg"
              alt=""
              source="https://codeburst.io/pandas-for-data-stuff-code-challenge-7972207a8294"
            />
          </li>
        </ul>
      </div>
    )
  }
}
