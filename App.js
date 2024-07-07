let btn = document.querySelector("button");


btn.addEventListener("click", async()=>{
    let fact = await getImage();
    let image = document.querySelector('#result');
    image.setAttribute("src" ,fact);
})



async function getImage(){
    try{
        let res = await axios.get("https://dog.ceo/api/breeds/image/random");
        return res.data.message;
    } catch(e){
        console.log("erroe", e);
        return "no image found";
    }
}