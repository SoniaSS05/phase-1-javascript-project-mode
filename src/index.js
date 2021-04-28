document.addEventListener('DOMContentLoaded', function(){

    // Global
   
    let obtData= new Array();
    const arrowL = document.getElementById('arrowLeft');
    arrowL.style.visibility = 'hidden';
    const arrowR = document.getElementById('arrowRight');
    arrowR.style.visibility = 'hidden';   


    function obtain(nameAni, classifi, firInd, lasInd){
       const url = `https://api.jikan.moe/v3/search/anime?${classifi}=${nameAni}`;
       const answer = fetch(url,{
            "content-type": "application/json",
            "accept": "application/json"})
            .then(response => response.json())
            .then(json => {
                obtData = json.results;
                showAnime(obtData,firInd,lasInd);
            })
            .catch((error) => {
                alert('Error : Try again ...', error);
            });
    }


    function showAnime(listAnime,firstIndex, lastIndex){
        const nameArr = (listAnime);
        const nameArrEight = nameArr.slice(firstIndex,lastIndex);
        const nextInd = document.getElementById('ultIndex');
        nextInd.value = ++lastIndex;
        if(firstIndex!=0){
            const arrowL = document.getElementById('arrowLeft');
            arrowL.style.visibility = 'visible';
        }
        const arrowR = document.getElementById('arrowRight');
        arrowR.style.visibility = 'visible';
        showAnimePag(nameArrEight);
    }


    function showAnimePag(nameArr){
        eraseChild();
        const seldiv = document.querySelector('#dispAnime');
        (nameArr).forEach((newName,index)=>{
            const divImgH2 = document.createElement('div');
            const imgAni = document.createElement('img');
            divImgH2.style.margin = "5px 18px 5px 18px";
            imgAni.style.borderRadius = "16px";
            const h2 = document.createElement('h2');
            h2.style.fontSize = "14px";
            imgAni.src= newName.image_url;
            h2.style.fontSize = '20px';
            h2.style.textAlign = 'center';
            h2.innerHTML = newName.title;

            seldiv.appendChild(divImgH2);
            divImgH2.appendChild(imgAni);
            divImgH2.appendChild(h2);
        })
    }

  

    function eraseChild(){
        let element1 = document.getElementById("dispAnime");
        while (element1.firstChild) {
            element1.removeChild(element1.firstChild);
        }
        let erase=true;
        return erase;
    }

   
 /* Submit Anime's name */
    const senSubmit = document.getElementById('searchBut');
    senSubmit.addEventListener('click', (e)=> {
        e.preventDefault();
        const senAnimeOne = document.getElementById('nAnime');
        const nAni = document.querySelector('#nameAnime');
        nAni.style.visibility = 'visible';
        nAni.innerHTML=senAnimeOne.value;
        obtain(senAnimeOne.value,'q',0,8);
    })
    

    // Menu Selection

    document.getElementById('animeSear').onclick = function(){
        eraseChild();
        document.getElementById('senAnime').style.visibility = 'visible';
        const nAni = document.querySelector('#nameAnime');
        nAni.style.visibility = 'hidden';
        const arrowR = document.getElementById('arrowRight');
        arrowR.style.visibility = 'hidden';
        const arrowL = document.getElementById('arrowLeft');
        arrowL.style.visibility = 'hidden';
    }

    document.getElementById('Action').onclick = function(){
        obtain('1','genre',0,8);
        const nAni = document.querySelector('#nameAnime');
        nAni.style.visibility = 'visible';
        nAni.innerHTML='Genre: Action';
        const arrowL = document.getElementById('arrowLeft');
        arrowL.style.visibility = 'hidden';
    }

    document.getElementById('Adventure').onclick = function(){
        obtain('2','genre',0,8);
        const nAni = document.querySelector('#nameAnime');
        nAni.style.visibility = 'visible';
        nAni.innerHTML='Genre: Adventure';
        const arrowL = document.getElementById('arrowLeft');
        arrowL.style.visibility = 'hidden';
    }

    document.getElementById('Fantasy').onclick = function(){
        obtain('10','genre',0,8);
        const nAni = document.querySelector('#nameAnime');
        nAni.style.visibility = 'visible';
        nAni.innerHTML='Genre: Fantasy';
        const arrowL = document.getElementById('arrowLeft');
        arrowL.style.visibility = 'hidden';
    }

    document.getElementById('Magic').onclick = function(){
        obtain('16','genre',0,8);
        const nAni = document.querySelector('#nameAnime');
        nAni.style.visibility = 'visible';
        nAni.innerHTML='Genre: Magic';
        const arrowL = document.getElementById('arrowLeft');
        arrowL.style.visibility = 'hidden';
    }

    document.getElementById('Thriller').onclick = function(){
        obtain('41','genre',0,8);
        const nAni = document.querySelector('#nameAnime');
        nAni.style.visibility = 'visible';
        nAni.innerHTML='Genre: Thriller';
        const arrowL = document.getElementById('arrowLeft');
        arrowL.style.visibility = 'hidden';
    }


    document.getElementById('Tv').onclick = function(){
        obtain('tv','type',0,8);
        const nAni = document.querySelector('#nameAnime');
        nAni.style.visibility = 'visible';
        nAni.innerHTML='Type: Tv';
        const arrowL = document.getElementById('arrowLeft');
        arrowL.style.visibility = 'hidden';
    }

    document.getElementById('Ova').onclick = function(){
        obtain('ova','type',0,8);
        const nAni = document.querySelector('#nameAnime');
        nAni.style.visibility = 'visible';
        nAni.innerHTML='Type: Ova';
        const arrowL = document.getElementById('arrowLeft');
        arrowL.style.visibility = 'hidden';
    }

    document.getElementById('Movie').onclick = function(){
        obtain('movie','type',0,8);
        const nAni = document.querySelector('#nameAnime');
        nAni.style.visibility = 'visible';
        nAni.innerHTML='Type: Movie';
        const arrowL = document.getElementById('arrowLeft');
        arrowL.style.visibility = 'hidden';
    }

    document.getElementById('Special').onclick = function(){
        obtain('special','type',0,8);
        const nAni = document.querySelector('#nameAnime');
        nAni.style.visibility = 'visible';
        nAni.innerHTML='Type: Special';
        const arrowL = document.getElementById('arrowLeft');
        arrowL.style.visibility = 'hidden';
    }

    document.getElementById('Music').onclick = function(){
        obtain('tv','type',0,8);
        const nAni = document.querySelector('#nameAnime');
        nAni.style.visibility = 'visible';
        nAni.innerHTML='Type: Music';
        const arrowL = document.getElementById('arrowLeft');
        arrowL.style.visibility = 'hidden';
    }


    document.getElementById('sc1').onclick = function(){
        obtain('1','score',0,8);
        const nAni = document.querySelector('#nameAnime');
        nAni.style.visibility = 'visible';
        nAni.innerHTML='Type: Score 1';
        const arrowL = document.getElementById('arrowLeft');
        arrowL.style.visibility = 'hidden';
    }

    document.getElementById('sc2').onclick = function(){
        obtain('2','score',0,8);
        const nAni = document.querySelector('#nameAnime');
        nAni.style.visibility = 'visible';
        nAni.innerHTML='Type: Score 2';
        const arrowL = document.getElementById('arrowLeft');
        arrowL.style.visibility = 'hidden';
    }

    document.getElementById('sc3').onclick = function(){
        obtain('3','score',0,8);
        const nAni = document.querySelector('#nameAnime');
        nAni.style.visibility = 'visible';
        nAni.innerHTML='Type: Score 3';
        const arrowL = document.getElementById('arrowLeft');
        arrowL.style.visibility = 'hidden';
    }

    document.getElementById('sc4').onclick = function(){
        obtain('4','score',0,8);
        const nAni = document.querySelector('#nameAnime');
        nAni.style.visibility = 'visible';
        nAni.innerHTML='Type: Score 4';
        const arrowL = document.getElementById('arrowLeft');
        arrowL.style.visibility = 'hidden';
    }

    document.getElementById('sc5').onclick = function(){
        obtain('5','score',0,8);
        const nAni = document.querySelector('#nameAnime');
        nAni.style.visibility = 'visible';
        nAni.innerHTML='Type: Score 5';
        const arrowL = document.getElementById('arrowLeft');
        arrowL.style.visibility = 'hidden';
    }

    document.getElementById('sc6').onclick = function(){
        obtain('6','score',0,8);
        const nAni = document.querySelector('#nameAnime');
        nAni.style.visibility = 'visible';
        nAni.innerHTML='Type: Score 6';
        const arrowL = document.getElementById('arrowLeft');
        arrowL.style.visibility = 'hidden';
    }

    document.getElementById('sc7').onclick = function(){
        obtain('7','score',0,8);
        const nAni = document.querySelector('#nameAnime');
        nAni.style.visibility = 'visible';
        nAni.innerHTML='Type: Score 7';
        const arrowL = document.getElementById('arrowLeft');
        arrowL.style.visibility = 'hidden';
    }

    document.getElementById('sc8').onclick = function(){
        obtain('8','score',0,8);
        const nAni = document.querySelector('#nameAnime');
        nAni.style.visibility = 'visible';
        nAni.innerHTML='Type: Score 8';
        const arrowL = document.getElementById('arrowLeft');
        arrowL.style.visibility = 'hidden';
    }

    document.getElementById('sc9').onclick = function(){
        obtain('9','score',0,8);
        const nAni = document.querySelector('#nameAnime');
        nAni.style.visibility = 'visible';
        nAni.innerHTML='Type: Score 9';
        const arrowL = document.getElementById('arrowLeft');
        arrowL.style.visibility = 'hidden';
    }
   
    document.getElementById('gender').onmouseover = function(){
        document.getElementById('senAnime').style.visibility = 'hidden';
    }
    document.getElementById('type').onmouseover = function(){
        document.getElementById('senAnime').style.visibility = 'hidden';
    }
    document.getElementById('score').onmouseover = function(){
        document.getElementById('senAnime').style.visibility = 'hidden';
    }

    //Right Arrow
    document.getElementById('arrowRight').onclick = function(){
        const nextInd = document.querySelector('#ultIndex');
        let fiInd = nextInd.value; 
        if(fiInd <= 45){
            document.getElementById('arrowRight').style.cursor = 'pointer';  
            document.getElementById('arrowRight').style.opacity = 1;
            document.getElementById('arrowLeft').style.cursor = 'pointer';  
            document.getElementById('arrowLeft').style.opacity = 1;
            let laInd = fiInd + 8;
            nextInd.value = laInd;
            showAnime(obtData,fiInd,laInd);
        }
        else{
            document.getElementById('arrowRight').style.cursor = 'none';  
            document.getElementById('arrowRight').style.opacity = 0.2;
        }
        
    }

    //Left Arrow
    document.getElementById('arrowLeft').onclick = function(){
        const nextInd = document.querySelector('#ultIndex');
        let fiInd = nextInd.value; 
        if(fiInd >= 18){
            document.getElementById('arrowLeft').style.cursor = 'pointer';  
            document.getElementById('arrowLeft').style.opacity = 1;
            document.getElementById('arrowRight').style.cursor = 'pointer';  
            document.getElementById('arrowRight').style.opacity = 1;
            let laInd = fiInd - 10;
            fiInd -= 9;
            nextInd.value = laInd;
            fiInd -= 9;
            showAnime(obtData,fiInd,laInd);
        }
        else{
            document.getElementById('arrowLeft').style.cursor = 'none';  
            document.getElementById('arrowLeft').style.opacity = 0.2;
        }
    }


    const pictuId = document.getElementsByName('pic1');
    console.log(pictuId);
    
})