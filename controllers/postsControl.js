import posts from "../data/posts.js"

// INDEX

function index(request, response) {
    response
        .status(200)
        .json({ messaggio: "ciauz" });
}

function show(request, response) {
    const { posts: postId } = request.query;

    response
        .status(200)
        .json({ messaggio: "Post N. " })
}

function create(request, response) {
    response
        .json({ messaggio: "ciauz" });
}

function destroy(request, response) {
    response
        .status(200)
        .json({ messaggio: "ciauz" });
}

export { index, show, create, destroy };