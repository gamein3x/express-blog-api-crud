// INDEX

function index(request, response) {
    response
        .status(200)
        .json({ messaggio: "ciauz" });
}

export { index };