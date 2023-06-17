import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Sections/Section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };





render() {

  // const { good, neutral, bad } = this.state;

  return <div>
      <Section title="Please leave feedback">
        <FeedbackOptions 
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
      </Section>
  </div>
  }
}
export default App;