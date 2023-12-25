const jokeBtn = document.querySelector(".jokeBtn");
const jokeContent = document.querySelector(".jokeContent");

const myApiKey = "/RaS0hJzQLNW2mp5nw6zGQ==CUWoGATFk7OMwq17";
const myApiUrl = "https://api.api-ninjas.com/v1/jokes?limit="

const options = {
    method:"GET",
    headers:{
        "X-Api-Key": myApiKey,
    },
}


async function getJoke() {

    try {
        jokeContent.textContent = "Veri çekiliyor...";
        jokeBtn.textContent = "Şaka üretiliyor...";
        jokeBtn.disabled = true;
    
        const response = await fetch(myApiUrl,options);
        const data = await response.json();
    
        // console.log(data)
        jokeContent.textContent =  data[0].joke;
        jokeBtn.disabled = false;
        jokeBtn.textContent = "Şaka Üret...";
    } catch (error) {
        console.error("Sistemde hata oluştu tekrar deneyiniz!")
        jokeBtn.disabled = false;
        jokeBtn.textContent = "Şaka Üret...";
    }
   

}

jokeBtn.addEventListener("click",getJoke);