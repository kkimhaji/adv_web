const url = "https://dapi.kakao.com/v2/search/web?query=#query&page=2";
const $docs = document.querySelector('#docs');
// const $query = document.querySelector('#query');
const $query = document.querySelector('[name="query"]');

const $btn = document.querySelector('#searchBtn');
const $searchForm = document.querySelector('#searchForm');


function getFetch(url, callback){
    const headers = {
        Authorization:'KakaoAK 4c8205a9234f9c019b37d1e3e10e33e8',
    };

    fetch(url, {headers})
    .then((response) => response.json())
    .then((data) => callback(data));
}

function search(){
    const query = $query.value;

    const searchUrl = url.replace('#query', query);
    //이거처럼 불변으로 만드는 게 더 좋다 
    // url = url.replace('#query', query);


    getFetch(searchUrl, (data) => {
        const { documents } = data;
        console.log(documents);
    
        const docs = documents.map((document)=>{
            console.log(document);
            return document.contents;
        });
        $docs.innerHTML = docs.join('<br> <hr>');
    });
}


// $query.addEventListener('keydown', (event)=>{
//     if(event.key != 'Enter') return;
//     search();
//     // if(event.key == 'Enter') search();
// });

$searchForm.addEventListener('submit', (event) => {
    search();
    event.preventDefault();
})