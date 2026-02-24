const totalCount = document.getElementById('totalCount');
const interviewCount = document.getElementById('interviewCount')
const rejectCount = document.getElementById('rejectCount')

const allCardSection = document.getElementById('allCards')


const allFilterBtn = document.getElementById('all-filter-btn');
;
const rejectFilterBtn = document.getElementById('reject-filter-btn')


let interviewList = [];
let rejectList = [];

function calculation(){
    totalCount.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectCount.innerText = rejectList.length;
}
calculation();

const interviewFilterBtn = document.getElementById('interview-filter-btn').addEventListener('click',function(){
    
})