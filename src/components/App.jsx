import { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }  
  addFeedback = (evt) => {
    this.setState((prev) => {
      const buttonName = evt.target.textContent.toLowerCase()     
      
      return { [buttonName]: prev[buttonName] + 1 }
    })    
  }
  countTotalFeedback = () => (this.state.good + this.state.neutral + this.state.bad)

  countPositiveFeedbackPercentage = () =>
    ((this.state.good / this.countTotalFeedback()).toFixed(2) * 100 || "0")

  render() {
    
    return <>
      <Section title="Please leave feedback">

      <FeedbackOptions
        options={{
          positive: "Good",
          neutral: "Neutral",
          negative: "Bad"}}
        onLeaveFeedback={this.addFeedback}>        
        </FeedbackOptions>      
        {this.countTotalFeedback() === 0 ? 
          <Notification message="There is no feedback"></Notification> :
          <Statistics
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage()}>        
        </Statistics> 
      }     

      </Section>      
    </>
  }
}
export const App = () => {
  return (
    <Feedback />
  )
};
