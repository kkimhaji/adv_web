let url = "https://dapi.kakao.com/v2/search/web?query=#query&page=";
const $docs = document.querySelector('#docs');
const $query = document.querySelector('[name="query"]');
const $searchForm = document.querySelector('#searchForm');
const $moreBtn = document.querySelector('#more');
let page = 1; //페이지 초기값 1

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
    const searchUrl = url.replace('#query', query) + page.toString(); //url에 추가
    getFetch(searchUrl, (data) => {
        const { documents } = data;
    
        const docs = documents.map((document)=>{
            return document.contents;
        });
        $docs.innerHTML += docs.join('<br> <hr>'); //더보기로 내용 추가 때문에 +=로 바꿈
    });
}


$searchForm.addEventListener('submit', (event) => {
    $docs.innerHTML = null; //새로 검색하면 기존 내역 지우기
    search();
    event.preventDefault();
});

$moreBtn.addEventListener('click', ()=>{
    page++; //page 증가시키고
    $docs.innerHTML += '<br><hr>'; //새로 불러오는 것과 기존 내용 구분
    search(); //검색
});