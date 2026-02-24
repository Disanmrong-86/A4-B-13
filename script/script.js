
let interviewList = [];
let rejectList = [];
let currentStatus = 'all';


let totalCount = document.getElementById('total-count')
let jobCount = document.getElementById('job-count')
let interviewCount = document.getElementById('interview-count')
let rejectCount = document.getElementById('reject-count')


const mainSection = document.querySelector('main');
const cardSection = document.getElementById('allCards');

const filterSection = document.getElementById('filter-section')


const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectFilterBtn = document.getElementById('reject-filter-btn');


function calculation(){
    totalCount.innerText = cardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectCount.innerText = rejectList.length;
    jobCount.innerText = totalCount.innerText ; 
    

    
    
}
calculation()




function toggleStyle(id){
    allFilterBtn.classList.add('bg-white', 'text-blue-400');
    interviewFilterBtn.classList.add('bg-white', 'text-blue-400');
    rejectFilterBtn.classList.add('bg-white', 'text-blue-400');
    allFilterBtn.classList.remove('bg-blue-500','text-white');
    interviewFilterBtn.classList.remove('bg-blue-500','text-white');
    rejectFilterBtn.classList.remove('bg-blue-500','text-white');

    const select = document.getElementById(id);
    currentStatus = id;
    console.log(currentStatus);
    select.classList.add('bg-blue-500','text-white')
    select.classList.remove('bg-white','text-blue-400');
   
    if(id == 'interview-filter-btn'){
        cardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        //   interviewSection();
        renderingInterview()
        
        // interviewSection();
        
    }else if(id == 'all-filter-btn'){
        cardSection.classList.remove('hidden');
        filterSection.classList.add('hidden')
        // jobCount.innerText = totalCount.innerText

    }else if(id == 'reject-filter-btn'){
         cardSection.classList.add('hidden');
         filterSection.classList.remove('hidden');
        // rejectSection(); 
         renderingReject()
        //  rejectSection()
    }
   
}

mainSection.addEventListener('click',function (event){
    deleteBtn()
    //  interviewSection()
    if(event.target.classList.contains('interview-btn')){
       
        const parenNode = event.target.parentNode.parentNode;

        const officeName = parenNode.querySelector('.officeName').innerText
        const position = parenNode.querySelector('.position').innerText;
        const salary = parenNode.querySelector('.salary').innerText;
        const status = parenNode.querySelector('.status').innerText;
        const notes = parenNode.querySelector('.notes').innerText;
        
        parenNode.querySelector('.status').innerText = "Interview";

        const cardInfo = {
            officeName,
            position,
            salary,
            status:'interview',
            notes, 
        }

        const officeExist = interviewList.find(item => item.officeName == cardInfo.officeName)

        if(!officeExist){
            interviewList.push(cardInfo);   
        }
        
        rejectList = rejectList.filter(item => item.officeName != cardInfo.officeName)
        
        if(currentStatus == 'reject-filter-btn'){
            renderingReject();
        }
        calculation()
        
        
        
  
    }else if(event.target.classList.contains('reject-btn')){
        // rejectSection()
        deleteBtn()
        const parenNode = event.target.parentNode.parentNode;

        const officeName = parenNode.querySelector('.officeName').innerText
        const position = parenNode.querySelector('.position').innerText;
        const salary = parenNode.querySelector('.salary').innerText;
        const status = parenNode.querySelector('.status').innerText;
        const notes = parenNode.querySelector('.notes').innerText;
       
        parenNode.querySelector('.status').innerText = "reject";

        const cardInfo = {
            officeName,
            position,
            salary,
            status:'reject',
            notes,
           
        }

        const officeExist = rejectList.find(item => item.officeName == cardInfo.officeName)

        if(!officeExist){
            rejectList.push(cardInfo)
          
        }
      
        interviewList = interviewList.filter(item => item.officeName != cardInfo.officeName)
        
        if(currentStatus == 'interview-filter-btn'){
            renderingInterview();
        }
        calculation()  
    }
})

function renderingInterview(){
   if(interviewList.length == 0){
                filterSection.classList.remove('hidden')
                return;
            }
    filterSection.innerHTML = '';
    for(let interview of interviewList){
        
        let div = document.createElement('div');
        div.className = "bg-white py-3 px-5 shadow-blue-50 flex "
        // interviewSection()
        div.innerHTML = `
        <div>
        <h1 class="officeName text-2xl text-blue-900 font-semibold">${interview.officeName}</h1>
        <p class="position mb-4">${interview.position}</p>
        
        <p class=" salary mb-3">Remote • Full-time • $130,000 - $175,000 </p>
        
        <button class="status bg-blue-200 text-blue-800 px-9 py-2 rounded-md mb-3">${interview.status}</button >
        <br>
        <p class="notes mb-3">${interview.notes}.</p>
        <div class="space-x-3">
        
             <button class="text-green-500 border border-green-500 px-6 py-2 rounded-md interview-btn">Interview</button>
            <button class="text-red-500 border border-red-500 px-6 py-2 rounded-md reject-btn">Rejected</button>
            </div>
            </div>
         <div>
                <button class="p-3 bg-red-400 text-white btn">Delete</button>
        </div>
        `
        filterSection.appendChild(div);
    }
}
function renderingReject() {
    if(rejectList.length == 0){
           filterSection.classList.remove('hidden')
           return;
       }

    filterSection.innerHTML = ''
    for(let reject of rejectList){
        
        let div = document.createElement('div');
        rejectSection()
        div.className = "bg-white py-3 px-5 shadow-blue-50 flex "
        div.innerHTML = `
        <div>
        <h1 class="officeName text-2xl text-blue-900 font-semibold">${reject.officeName}</h1>
        <p class="position mb-4">${reject.position}</p>
        
        <p class=" salary mb-3">Remote • Full-time • $130,000 - $175,000 </p>
        
        <button class="status bg-blue-200 text-blue-800 px-9 py-2 rounded-md mb-3">${reject.status}</button >
        <br>
        <p class="notes mb-3">${reject.notes}.</p>
        <div class="space-x-3">
            <button class="text-green-500 border border-green-500 px-6 py-2 rounded-md interview-btn">Interview</button>
            <button class="text-red-500 border border-red-500 px-6 py-2 rounded-md reject-btn">Rejected</button>
        </div>
        </div>
        <div>
        <button class="p-3 bg-red-400 text-white btn">Delete</button>
        </div>
        
        `
        filterSection.appendChild(div)
      
        
    }
}

function deleteBtn(){
    let button = document.getElementsByClassName('btn')
for(let btn of button){
    btn.addEventListener('click',function(event){
   let card = event.target.parentNode.parentNode
   card.remove()
   calculation();
    
 })
}

}
deleteBtn()





 