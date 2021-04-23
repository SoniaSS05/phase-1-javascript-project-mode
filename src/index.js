document.addEventListener('DOMContentLoaded', function(){


   
    function obtain(nameAni){
        console.log(nameAni);
        const url = 'https://api.jikan.moe/v3/search/anime?score=5.0 ';
        //const url = `https://api.jikan.moe/v3/search/anime?q=${nameAni}&Page=1`; SEARCH
   
        //const url = `https://api.jikan.moe/v3/search/anime?genre=15`; GENDER

        //const url = `https://api.jikan.moe/v3/search/anime?q=dragonballz`;
       //const url = 'https://api.jikan.moe/v3/search/anime';
       //const url = `https://api.jikan.moe/v3/search/anime?q=${nameAni}`;
       //const url = `https://api.jikan.moe/v3/search/anime?q=${nameAni}&page=2`;
     
        console.log(url);
        const answer = fetch(url,{
            "content-type": "application/json",
            "accept": "application/json"})
            .then(response => response.json())
            .then(json => {
                console.log(json);
                showAnime(json,nameAni);
            })
    }

    function showAnime(listAnime,reNameAni){
        console.log(listAnime);
        eraseChild();
        const seldiv = document.querySelector('#dispAnime');
        const nameArr = (listAnime.results);
        (nameArr).map((newName)=>{
            const divImgH2 = document.createElement('div');
            const imgAni = document.createElement('img');
            divImgH2.style.margin = "5px 18px 5px 18px";
            imgAni.style.borderRadius = "16px";


            //imgAni.addEventListener('mouseover', showSip(newName.synopsis));
            //imgAni.addEventListener('mouseout',function(){
            //    console.log('hola1');
           // });
            

            const h2 = document.createElement('h2');
            h2.style.fontSize = "14px";
            imgAni.src= newName.image_url;
            h2.innerHTML = newName.title;
            seldiv.appendChild(divImgH2);
            divImgH2.appendChild(imgAni);
            divImgH2.appendChild(h2);
        })
        const nAni = document.querySelector('#nameAnime');
        nAni.innerHTML=reNameAni;
    }

    function eraseChild(){
        let element1 = document.getElementById("dispAnime");
        while (element1.firstChild) {
            element1.removeChild(element1.firstChild);
        }
        let erase=true;
        return erase;
    }

    function showSip(recSyp){
        alert(recSyp);
    }

    senSubmit = document.getElementById('searchBut');
    senSubmit.addEventListener('click', (e)=> {
        e.preventDefault();
        //eraseChildRepo();
        obtain(search.value);
    })




})