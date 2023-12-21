function logPostsAndLastActivity() {
    console.log("Posts:", posts);
    console.log("Last Activity Time:", lastActivityTime);
}

// Usage
createPost({ title: 'Post1' })
    .then(() => updateLastUserActivityTime())
    .then(updatedActivityTime => {
        console.log("Updated Last Activity Time:", updatedActivityTime);
        return createPost({ title: 'Post2' });
    })
    .then(() => updateLastUserActivityTime())
    .then(updatedActivityTime => {
        console.log("Updated Last Activity Time:", updatedActivityTime);
        logPostsAndLastActivity();
        return deletePost();
    })
    .then(deletedPost => {
        console.log("Deleted Post:", deletedPost);
        logPostsAndLastActivity();
    })
    .catch(error => console.error(error));