import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import moment from 'moment';

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
        <span className="time">
            {timeString}
        </span>
    );
};

const ReplyButton = () => (
    <i className="fa fa-reply reply-button"/>
);
function getRetweetCount(count){
    if (count>0){
        return (
            <span className="retweet-count">
                {count}
            </span>
        );
    }else{
        return null;
    }
}
function Count({ count }) {
    if(count > 0) {
    return (
    <span className="retweet-count">
    {count}
    </span>
    );
    } else {
    return null;
    }
}
const RetweetButton = ({ count }) => (
    <span className="retweet-button">
    <i className="fa fa-retweet"/>
    <Count count={count} />
    </span>
    );
const LikeButton = ({ count }) => (
<span className="like-button">
<i className="fa fa-heart"/><span className="like-count">
{count ? count : null}
</span>
</span>
);
const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
);

function Avatar({ hash }) {
    var url = `https://www.gravatar.com/avatar/${hash}`;
    return (
    <img
    src={url}
    className="avatar"
    alt="avatar" />
    );
}

function Message({text}) {
    return (
    <div className="message">
        {text}
    </div>
    );
}

function Comment({ author, message, likes }) {
    return (
    <div>
    <div className='author'>{author}</div>
    <div className='message'>{message}</div>
    <div className='likes'>
    {likes > 0 ? likes : 'No'} likes
    </div>
    </div>
    );
}

Comment.propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    likes: PropTypes.number
}

function NameWithHandle({ author }) {
    const { name, handle } = author;
    return (
    <span className="name-with-handle">
    <span className="name">{name}</span>
    <span className="handle">@{handle}</span>
    </span>
    );
}

// add the { tweet } destructuring
function Tweet({ tweet }) {
    return (
    <div className="tweet">
        <Avatar hash={tweet.gravatar}/>
        <div className="content">
            <NameWithHandle author={tweet.author}/><Time time={tweet.timestamp}/>
            <Message text={tweet.message}/>
            <div className="buttons">
                <ReplyButton/>
                <RetweetButton count={tweet.retweets}/>
                <LikeButton count={tweet.likes} />
                <MoreOptionsButton/>
            </div>
        </div>
    </div>
);
}
// ...
var testTweet = {
    message: "Something about cats.",
    gravatar: "xyz",
    author: {
    handle: "catperson",
    name: "IAMA Cat Person"
    },
    likes: 2,
    retweets: 5,
    timestamp: "2012-07-30 21:24:37"
};

ReactDOM.render(<Tweet tweet={testTweet}/>,
document.querySelector('#root'));