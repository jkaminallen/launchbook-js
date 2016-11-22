// Exercise: Find the top navbar by query for the element type, which is <nav>.
document.getElementsByTagName("nav")[0];

// Exercise: Find the sidebar on the right by using it's id.
document.getElementById('sidebar-right');

// Exercise: Find the "Pages" and "Groups" sections of the sidebar by using their class.
document.getElementsByClassName('pages')[0];
document.getElementsByClassName('groups')[0];

// Exercise: Find all of the comments on the page.
document.getElementsByClassName('comments');

// Exercise: Find the first comment on the page.
document.getElementsByClassName('comments')[0];

// Exercise: Find the last comment on the page.
var comments = document.getElementsByClassName('comments');
var lastCommentIndex = comments.length - 1;
comments[lastCommentIndex]

// Exercise: Find the fourth comment on the page.
document.getElementsByClassName('panel')[3];

// Exercise: Find one of the ads in the sidebar and hide them.
var statusUpdateForm = document.getElementsByClassName('ad-slot')[0];
statusUpdateForm.style.visibility = "hidden";

// Exercise: Set the visibility to the form that you hid in the previous step to make it visible again.
var statusUpdateForm = document.getElementsByClassName('ad-slot')[0];
statusUpdateForm.style.visibility = "visible";

// Exercise: Use setAttribute to change src attribute of one of the ads in the sidebar.
var adUpdate = document.getElementsByClassName('ad-slot')[0];
var changePic = adUpdate.getElementsByTagName('img')[0];
changePic.setAttribute('src', 'http://placebear.com/200/300');

// Exercise: Find Sam's post and change it's text to something incredible.
document.getElementsByClassName('media-body')[8].getElementsByTagName('p')[0].innerHTML = 'We are happy here at Launch :)'

// Exercise: Find the first post and add the .post-liked class to it.
var liked = document.getElementsByClassName('inline-list post-actions')[0];
var stopMe = liked.getElementsByTagName('li')[0];
stopMe.className = stopMe.className + " post-liked"

// Exercise: Find the second post and remove the .post-liked class.
var liked = document.getElementsByClassName('post post-liked media')[0];
liked.classList.remove('post-liked');
