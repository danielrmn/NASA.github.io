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

// NASA API

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener("keydown", (e)=>{
	if(e.key === "Enter"){
    	console.log("searching");
    }
})

sendApiPaquets();
async function sendApiPaquets(){
    let nasa_api = 'duc6yvTa7DqRymjhXS8sshFgObe9DU501cE7KSWH';
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasa_api}`);
    //console.log(response);
    let data = await response.json();
    //console.log(data)
    useApiData(data);
}

function useApiData(data) {
    let titleM = document.querySelector('.title').innerHTML = data.title;
    let media = document.querySelector('.preview-content').innerHTML = `<img src="${data.url}"></img>`;
    let descriptionM = document.querySelector('.description').innerHTML = data.explanation;
    let dateM = document.querySelector('.date').innerHTML = data.date;
    let copyrightM =document.querySelector('.copyright').innerHTML =data.copyright;

    //console.log(media)
}
