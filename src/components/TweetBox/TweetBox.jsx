import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {
  console.log(props)

    function handleOnTweetTextChange(event)
  {
    props.setTweetText(event.target.value)
  }
 
  const handleOnSubmit = () => {
    var newTweet =
    {
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: props.tweetText,
      comments: 0,
      retweets: 0,
      likes: 0,
      id: props.tweets.length
    }
    props.setTweets(passTweet => [...passTweet, newTweet])
    console.log(150,props)
    props.setTweetText("")
   
    
  }
  console.log(props.tweetText.length)

  return (
    
    <div className="tweet-box">
      <TweetInput value= {props.tweetText}  handleOnChange={handleOnTweetTextChange} onChange={props.handleOnChange} />

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetText = {props.tweetText}  />
        <TweetSubmitButton handleOnSubmit={handleOnSubmit}  tweetText={props.tweetText} />
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  var charLeft = 140 - props.tweetText.length
  var tweet_length = "tweet-length"
  
  if (charLeft < 0)
  {
    tweet_length = tweet_length + " "+ "red"
  }
  

  if (props.tweetText.length >= 1)
  {
     return <span className={tweet_length}>{charLeft} characters remaining</span>
  }
  else {
    return <span></span>
  }
 
}

export function TweetSubmitButton({ handleOnSubmit, tweetText=""}) {
  console.log(tweetText.length)
  var disableTweet = true
  if (tweetText.length < 1) {
    disableTweet = true
  }
  else if (tweetText.length > 140)
  {
    disableTweet=true
  }
  else
  {
    disableTweet= false
  }
 
  
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button disabled={disableTweet} className="tweet-submit-button" onClick={handleOnSubmit}>Tweet</button>
    </div>
  )
}
