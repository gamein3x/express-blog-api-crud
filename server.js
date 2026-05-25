import express from "express";
import postsRouter from "./routers/posts.js"

const app = express();

app.use(express.static('public'));

app.use('/posts', postsRouter);

const posts = [
    {
        titolo: "Introduzione a Node.js",
        contenuto: "Node.js consente di eseguire JavaScript lato server. In questo articolo vedremo come configurare il nostro primo server web usando il modulo nativo HTTP.",
        immagine: "/images/bird.png",
        tags: ["NodeJS", "JavaScript", "Backend"]
    },
    {
        titolo: "Alla scoperta di Express.js",
        contenuto: "Express è il framework minimalista più famoso per Node.js. Semplifica la gestione delle rotte, dei middleware e la configurazione degli asset statici.",
        immagine: "/images/enelem.jpg",
        tags: ["Express", "Backend", "WebDev"]
    },
    {
        titolo: "Come funzionano i Middleware",
        contenuto: "I middleware sono il cuore pulsante di Express. Intercettano la richiesta prima che arrivi alla rotta finale, permettendo di fare controlli, log o manipolazioni dei dati.",
        immagine: "/images/killerqueen1.jpg",
        tags: ["Express", "Architecture", "Learning"]
    },
    {
        titolo: "Guida pratica a Postman",
        contenuto: "Postman è uno strumento indispensabile per testare le API. Vedremo come inviare richieste GET, POST, PUT e DELETE senza bisogno di un'interfaccia frontend.",
        immagine: "/images/saitama.jpg",
        tags: ["API", "Testing", "Tools"]
    },
    {
        titolo: "Gestire gli Asset Statici",
        contenuto: "Immagini, file CSS e script client-side hanno bisogno di essere serviti correttamente. Scopriamo come usare express.static per rendere accessibile la cartella public.",
        immagine: "/images/wariotrain.png",
        tags: ["Express", "Frontend", "StaticFiles"]
    }
];

// Bacheca
app.get('/bacheca', (request, response) => {
    response.json(posts);
});

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

// Listen
app.listen(6969, (error) => {
    if (error) {
        console.log('Errore dal server');
    } else {
        console.log('Server in ascolto. Wela');
    }
});
