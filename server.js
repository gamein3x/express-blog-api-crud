import express from "express";
import postsRouter from "./routers/posts.js";
import { posts } from "./data/posts.js";


const app = express();

app.use(express.static('public'));

app.use('/posts', postsRouter);

// Bacheca
app.get('/bacheca', (request, response) => {
    response.json({
        message: "Bacheca",
        content: posts
    });
});


/*
// Blog

app.get('/blog', (request, response) => {
    // Usiamo il destructuring direttamente come parametro del map: ({ titolo, contenuto, immagine, tags })
    const cardPost = posts.map(({ titolo, contenuto, immagine, tags }) => {

        const tagsHTML = tags.map(tag => `<span class="tag">#${tag}</span>`).join(' ');

        return `
            <div class="post-card">
                <img src="${immagine}" alt="${titolo}" class="post-image">
                <div class="post-content">
                    <h2>${titolo}</h2>
                    <p>${contenuto}</p>
                    <div class="post-tags">${tagsHTML}</div>
                </div>
            </div>
        `;
    }).join(''); // .join('') unisce l'array di stringhe in un unico grande testo HTML
    response.send(cardPost);
});
*/

// Listen
app.listen(6969, (error) => {
    if (error) {
        console.log('Errore dal server');
    } else {
        console.log('Server in ascolto. Wela');
    }
});
