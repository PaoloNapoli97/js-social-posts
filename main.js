const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const postLiked = [];

const postContainer = document.getElementById('container');

for(let i = 0; i < posts.length; i++) {
    const element = posts[i];
    // Clona il template del post dall'HTML
    const template = document.getElementById('post-template').content.cloneNode(true);
    // Imposto le immagini del profilo
    template.querySelector('.profile-pic').src = element.author.image;
    template.querySelector('.profile-pic').alt = element.author.name;
    // Informazion nome creatore e data creazione
    template.querySelector('.post-meta__author').innerHTML = element.author.name;
    template.querySelector('.post-meta__time').innerHTML = new Date(element.created).toDateString();
    // Posto il contenuno del testo del post
    template.querySelector('.post__text').innerHTML = element.content;
    // Immagine del post
    template.querySelector('.post__image > img').src = element.media;

    // Inizio correzione della mattina

    // Pulsante mi piace
    template.querySelector('.js-like-button').addEventListener('click', onClick);
    template.querySelector('.js-like-button').setAttribute('data-postid', element.id);
    // Numero di mi piace
    template.querySelector('.js-likes-counter').innerHTML = element.likes;
    template.querySelector('.js-likes-counter').id = `like-counter-${element.id}`;

    postContainer.append(template);
}

function onClick(event) {
    event.preventDefault();
    this.classList.add('like-button--liked');
    const postID = this.getAttribute('data-postid');
    const postLikes = document.querySelector(`#like-counter-${postID}`);
    postLikes.innerHTML = Number(postLikes.innerHTML) + 1;
    postLiked.push(element.id);
}