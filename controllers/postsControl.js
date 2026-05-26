import { posts } from "../data/posts.js";

// INDEX

function index(request, response) {
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
        .status(200)
        .json({ messaggio: "ciauz" });
}

export { index, show, create, destroy };