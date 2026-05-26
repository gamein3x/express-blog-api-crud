import { posts } from "../data/posts.js";

// INDEX

function index(request, response) {

    // Filtro 1: per tag (es. /posts?tag=node)
    if (request.query.tag) {
        filteredPosts = filteredPosts.filter(post => post.tags.includes(request.query.tag));
    }

    // Filtro 2: per titolo (es. /posts?title=routing)
    if (request.query.title) {
        filteredPosts = filteredPosts.filter(post => 
            post.title.toLowerCase().includes(request.query.title.toLowerCase())
        );
    }

    response
        .status(200)
        .json({
            messaggio: "Indice",
            content: posts
        });
}


function show(request, response) {
    const postId = parseInt(request.params.id);

    const post = posts.find((postQuery) => postQuery.id === postId );

    if (!post) {
        // Controllo se l'utente inserisce un dato non corretto o un ID inesistente
        return response.status(404).json({
            message: `Nessun post trovato con id ${postId}`
        });
    }
    response.status(200).json({
        message: `Dettagli del post ${postId}`,
        data: post
    });
}

function create(request, response) {
    response
        .json({ messaggio: "ciauz" });
}

function destroy(request, response) {
    response
        .status(204)
        .json({ messaggio: "Post eliminato" });
}

export { index, show, create, destroy };