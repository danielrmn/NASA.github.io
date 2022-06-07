// btn active

const menu = document.getElementById('menu-btn');
const hyperlink = document.getElementById('hyperlink');
let counter=0;

menu.addEventListener('click', e=> {
    if(counter == 0){
        hyperlink.style.display = 'none';
        counter = 1;
    }else{
        hyperlink.style.display = 'block';
        counter = 0;
    }
})

//https://www.youtube.com/watch?v=nvgeFhLaSuA&t=697s

// window.addEventListener('load', getData);

// function getData() {
//     const nasa_api = 'duc6yvTa7DqRymjhXS8sshFgObe9DU501cE7KSWH';
//     const route = `https://api.nasa.gov/planetary/apod?api_key=${nasa_api}`;

//     fetch(route)
//     .then(reply => reply.json())
//     .then(reply => showData(reply))
// }

// function showData(date, explanation, media_type, title, service_version, copyright, thumbnail_url) {
//     const date = document.querySelector('#date');
//     date.innerHTML = date;
//     const explanation = document.querySelector('#explanation');
//     explanation.innerHTML = date;
//     const media_type = document.querySelector('#media_type');
//     const title = document.querySelector('#title');
//     title.innerHTML = date;
//     const service_version = document.querySelector('#service_version');
//     service_version.innerHTML = date;
//     const copyright = document.querySelector('#copyright');
//     copyright.innerHTML = date;

//     if(media_type == 'video'){
//         media_type.innerHTML = media_type;

//     }
// }