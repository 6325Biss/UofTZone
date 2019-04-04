'use strict'
const log = console.log;
const path = window.location.pathname;
const postBody = document.querySelector('#postBodyBox');
//* Event listeners for button submit and button click */
postBody.addEventListener('click', allClickEvents);
// log(page);

// Functions that don't edit DOM themselves, but can call DOM functions 
function allClickEvents(e) {
    e.preventDefault();

    if (e.target.value == 'Submit') {
        if (e.target.parentElement.children[0].value != '') {
            let category = ''
            if (path.includes('logged_q.html')) {
                category = 'Q&A'
            }
            else if (path.includes('logged_b.html')) {
                category = 'BookExchange'
            }
            else if (path.includes('logged_f.html')) {
                category = 'FreeFood'
            }
            const post = {
                postContent: e.target.parentElement.children[0].value,
                category: category
            }
            // console.log(post);
            addPostToPostBox(post);
        }
    }
    else if (e.target.classList.contains('feedbackButton')) {
        if (e.target.innerText == 'Report') {
            e.target.innerText = 'Unreport'
            recordReport(e);
        }
        else if (e.target.innerText == 'Unreport') {
            e.target.innerText = 'Report'
            recordUnreport(e);
        }
        else if (e.target.innerText == 'Reply') {
            //DOM function to add feedback
            addFeedbackBox(e.target.parentElement.parentElement);
        }
    }
    else if (e.target.classList.contains('cancel')) {
        e.target.parentElement.parentElement.removeChild(e.target.parentElement);
    }
    else if (e.target.classList.contains('submitReply')) {
        let category = ''
            if (path.includes('logged_q.html')) {
                category = 'Q&A'
            }
            else if (path.includes('logged_b.html')) {
                category = 'BookExchange'
            }
            else if (path.includes('logged_f.html')) {
                category = 'FreeFood'
            }
            const post = {
                postContent: e.target.parentElement.children[0].value,
                category: category
            }
        addReplyPost(e.target.parentElement.parentElement, post);
        e.target.parentElement.parentElement.removeChild(e.target.parentElement);
    }
    else if (e.target.classList.contains('unlike')) {
        e.target.className = 'like';
        e.target.src = 'like.jpg';
        recordLiking(e);

    }
    else if (e.target.classList.contains('like')) {
        e.target.className = 'unlike';
        e.target.src = 'unlike.jpg';
        recordUnliking(e);
    }

}


function recordLiking(e) {
    // get the necessary of the liked post data
    let category = ''
    if (path.includes('logged_q.html')) {
        category = 'Q&A'
    }
    else if (path.includes('logged_b.html')) {
        category = 'BookExchange'
    }
    else if (path.includes('logged_f.html')) {
        category = 'FreeFood'
    }
    const target = e.target.parentElement.parentElement.parentElement
    const postContent = target.children[2].innerText;

    const url = '/liked';
    // The data we are going to send in our request
    let data = {
        postContent: postContent,
        category: category
    }
    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: 'PATCH', 
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    });
    fetch(request)
    .then((res) => {
        // Handle response we get from the API
        if (res.status == 200) {
            log('Success')
        }
        else {
            log('failed')
        }
        log(res)
    }).catch((error) => {
        console.log(error)
    })
}

function recordUnliking(e) {
    // get the necessary of the liked post data
    let category = ''
    if (path.includes('logged_q.html')) {
        category = 'Q&A'
    }
    else if (path.includes('logged_b.html')) {
        category = 'BookExchange'
    }
    else if (path.includes('logged_f.html')) {
        category = 'FreeFood'
    }
    const target = e.target.parentElement.parentElement.parentElement
    const postContent = target.children[2].innerText;

    const url = '/unliked';
    // The data we are going to send in our request
    let data = {
        postContent: postContent,
        category: category
    }
    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: 'PATCH', 
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    });
    fetch(request)
    .then((res) => {
        // Handle response we get from the API
        if (res.status == 200) {
            log('Success')
        }
        else {
            log('failed')
        }
        log(res)
    }).catch((error) => {
        console.log(error)
    })
}

function recordReport(e) {
    // get the necessary of the reported post data
    let category = ''
    if (path.includes('logged_q.html')) {
        category = 'Q&A'
    }
    else if (path.includes('logged_b.html')) {
        category = 'BookExchange'
    }
    else if (path.includes('logged_f.html')) {
        category = 'FreeFood'
    }
    const target = e.target.parentElement.parentElement
    const postContent = target.children[2].innerText;

    const url = '/report';
    // The data we are going to send in our request
    let data = {
        postContent: postContent,
        category: category
    }
    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: 'PATCH', 
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    });
    fetch(request)
    .then((res) => {
        // Handle response we get from the API
        if (res.status == 200) {
            log('Success')
        }
        else {
            log('failed')
        }
        log(res)
    }).catch((error) => {
        console.log(error)
    })

}

function recordUnreport(e) {
     // get the necessary of the reported post data
    let category = ''
    if (path.includes('logged_q.html')) {
        category = 'Q&A'
    }
    else if (path.includes('logged_b.html')) {
        category = 'BookExchange'
    }
    else if (path.includes('logged_f.html')) {
        category = 'FreeFood'
    }
    const target = e.target.parentElement.parentElement
    const postContent = target.children[2].innerText;

    const url = '/unreport';
    // The data we are going to send in our request
    let data = {
        postContent: postContent,
        category: category
    }
    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: 'PATCH', 
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    });
    fetch(request)
    .then((res) => {
        // Handle response we get from the API
        if (res.status == 200) {
            log('Success')
        }
        else {
            log('failed')
        }
        log(res)
    }).catch((error) => {
        console.log(error)
    })
}
// DOM functions

// This function adds the post to the postBox on the page that the user wants to post.
function addPostToPostBox(post) {
    //fetch a get url to get the information of the current logged in user. 
    let url = '/getCurrUser';
    fetch(url)
    .then((res) => { 
        if (res.status === 200) {
           return res.json() 
       } else {
            alert('Could not get user')
       }                
    })
    .then((json) => {
        // adding dynamic html 
        const split = document.createElement('div');
        split.className = 'postSplit';
        const thePost = document.createElement('div');
        thePost.className = 'post';

        const iconBox = document.createElement('div');
        iconBox.className = 'posterIconBox';
        const icon = document.createElement('img');
        icon.className = 'posterIcon';
        icon.src = "signicon.jpg";
        iconBox.appendChild(icon);

        const username = document.createElement('div');
        username.className = 'userName';
        const name = document.createTextNode(json.name);
        username.appendChild(name);

        const content = document.createElement('div');
        content.className = 'postContent';
        const contents = document.createTextNode(post.postContent);
        content.appendChild(contents);

        const feedback = document.createElement('form');
        feedback.className = 'feedback';
         const likelink = document.createElement('a');
        likelink.href = "";
        const likeimage = document.createElement('img');
        likeimage.className = 'unlike';
        likeimage.src = 'unlike.jpg';
        likelink.appendChild(likeimage);
        const reply = document.createElement('button');
        reply.className = 'feedbackButton';
        reply.appendChild(document.createTextNode('Reply'));
        const report = document.createElement('button');
        report.className = 'feedbackButton';
        report.appendChild(document.createTextNode('Report'));
        feedback.appendChild(likelink);
        feedback.appendChild(reply);
        feedback.appendChild(report);

        postBody.appendChild(split);
        thePost.appendChild(iconBox);
        thePost.appendChild(username);
        thePost.appendChild(content);
        thePost.appendChild(feedback);
        postBody.appendChild(thePost);

        // fetch a url to save the new post
        const newpost = {
            likes: 0,
            reported: 0,
            replies: [],
            poster: json._id,
            postContent: post.postContent,
            category: post.category
        }
        url = '/addPost';
        const request = new Request(url, {
        method: 'POST', 
        body: JSON.stringify(newpost),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        });
        return fetch(request)
        .then((res) => {
            // Handle response we get from the API
            if (res.status == 200) {
                log('Success')
            }
            else {
                log('failed')
            }
            log(res)
        }).catch((error) => {
            console.log(error)
        })

        }).catch((error) => {
            console.log(error)
        })
    

}

function addFeedbackBox(target) {
    const replyBox = document.createElement('form');
    replyBox.className = 'replyArea';
    const textArea = document.createElement('textarea');
    textArea.rows = '8';
    textArea.cols = '150';
    textArea.placeholder = 'Write Your Post Here';
    const reply = document.createElement('input');
    reply.className = 'submitReply';
    reply.type = 'submit';
    reply.value = 'Submit Reply';
    const cancel = document.createElement('input');
    cancel.className = 'cancel';
    cancel.type = 'submit';
    cancel.value = 'Cancel';
    replyBox.appendChild(textArea);
    replyBox.appendChild(reply);
    replyBox.appendChild(cancel);
    target.appendChild(replyBox);
}

function addReplyPost(target, post) {

    // Instructions to perform this task:
    // 1. Create a post the save the post to db
    // 2. Update the reply list of the being replied post
    // 3. update the post list of the write who is replying(current logged in user)
    // 4. update the post list of the author of being replied, by using the result from 2


    // fetch a url to get current logged in user
    let url = '/getCurrUser';
    fetch(url)
    .then((res) => { 
        if (res.status === 200) {
           return res.json() 
       } else {
            alert('Could not get user')
       }                
    })
    .then((json) => {
        // adding dynamic html 
        const split = document.createElement('div');
        split.className = 'postSplit';
        const thePost = document.createElement('div');
        thePost.className = 'post';

        const iconBox = document.createElement('div');
        iconBox.className = 'posterIconBox';
        const icon = document.createElement('img');
        icon.className = 'posterIcon';
        icon.src = 'signicon.jpg';
        iconBox.appendChild(icon);

        const username = document.createElement('div');
        username.className = 'userName';
        const name = document.createTextNode(json.name);
        username.appendChild(name);

        const content = document.createElement('div');
        content.className = 'postContent';
        const contents = document.createTextNode(post.postContent);
        content.appendChild(contents);

        const feedback = document.createElement('form');
        feedback.className = 'feedback';
        const likelink = document.createElement('a');
        likelink.href = "";
        const likeimage = document.createElement('img');
        likeimage.className = 'unlike';
        likeimage.src = 'unlike.jpg';
        likelink.appendChild(likeimage);
        const reply = document.createElement('button');
        reply.className = 'feedbackButton';
        reply.appendChild(document.createTextNode('Reply'));
        const report = document.createElement('button');
        report.className = 'feedbackButton';
        report.appendChild(document.createTextNode('Report'));
        feedback.appendChild(likelink);
        feedback.appendChild(reply);
        feedback.appendChild(report);

        thePost.appendChild(iconBox);
        thePost.appendChild(username);
        thePost.appendChild(content);
        thePost.appendChild(feedback);
        target.appendChild(split);
        target.appendChild(thePost);

        // fetch a url to save the new post
        const newpost = {
            likes: 0,
            reported: 0,
            replies: [],
            poster: json._id,
            postContent: post.postContent,
            category: post.category
        }
        const oldpost = {
            postContent: target.children[2].innerText,
            category: post.category
        }
        const data = {newpost, oldpost}
        url = '/addReply';
        const request = new Request(url, {
        method: 'POST', 
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        });
        return fetch(request)
        .then((res) => {
            // Handle response we get from the API
            if (res.status == 200) {
                log('Success')
            }
            else {
                log('failed')
            }
            log(res)
        }).catch((error) => {
            console.log(error)
        })

        }).catch((error) => {
            console.log(error)
        })
}