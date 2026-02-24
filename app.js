let interviewList = [];
let rejectList = [];
let currentState = 'filter-all';

let job = document.getElementById("jobCount");
let interview = document.getElementById("InterviewJob");
let reject = document.getElementById("rejectedJob");

let total = document.getElementById("TotalJob")



let totalJob = document.getElementById("jobPost");

let filterSection = document.getElementById('filterBox');
console.log(filterSection)


let countJob = totalJob.children.length;


const mainContainer = document.querySelector('main')

function jobCalculate() {
    const currentCount = totalJob.children.length;
    job.innerText = currentCount; 
    total.innerText = currentCount 
    interview.innerText = interviewList.length;
    reject.innerText = rejectList.length;
}
jobCalculate()

const allBtn = document.getElementById('filter-all');
const interviewBtn = document.getElementById('filter-interview');
const rejectBtn = document.getElementById('filter-reject');

function toggle(id){
  currentState = id;
  allBtn.classList.remove('bg-green-400' , "text-white");
  interviewBtn.classList.remove('bg-black' , "text-white");
  rejectBtn.classList.remove('bg-black' , "text-white");

  allBtn.classList.add('bg-gray-200' ,"text-black");
  interviewBtn.classList.add('bg-gray-200' , "text-black");
  rejectBtn.classList.add('bg-gray-200' , "text-black");


  const select = document.getElementById(id);
  console.log(select.innerText)
  select.classList.remove('bg-gray-200' , "text-black");
  select.classList.add('bg-black' , "text-white");

  if(id == "filter-interview"){
    totalJob.classList.add('hidden')
    filterSection.classList.remove('hidden')
      total.innerText = `${interviewList.length}  of ${countJob} Job`;
    interviewRender()
  }else if(id == "filter-all"){
        totalJob.classList.remove('hidden')
    filterSection.classList.add('hidden')
    jobCalculate()

  }else if(id == "filter-reject"){
      filterSection.classList.remove('hidden')
        totalJob.classList.add('hidden')
          total.innerText = `${rejectList.length} of ${countJob} Job`;
        rejectRender()

  }
}

mainContainer.addEventListener('click' , function(e){
    console.log(e.target)
        const parentNode = e.target.closest('.flex.flex-col'); 
    if (!parentNode) return;

    const jobName = parentNode.querySelector('.company').innerText;
    
       if (e.target.closest('.btn-outline')) {
        interviewList = interviewList.filter(item => item.jobName !== jobName);
        rejectList = rejectList.filter(item => item.jobName !== jobName);

        parentNode.remove();
        jobCalculate();
        if (currentState === 'filter-interview') interviewRender();
        if (currentState === 'filter-reject') rejectRender();
        return;
    }else if(e.target.classList.contains('btn-success')){
         const parentNode = e.target.parentNode.parentNode;
      const jobName = parentNode.querySelector('.company').innerText;
      const jobRole = parentNode.querySelector('.role').innerText;
      const jobstate = parentNode.querySelector('.state');
       const state =   jobstate.innerHTML = "Interview";
        jobstate.classList.add( 'btn', "btn-success", "btn-sm")

      const jobFaci = parentNode.querySelector('.facilities').innerText;
      const jobRaq = parentNode.querySelector('.req').innerText;

       
      const cardInfo = {jobName , jobRole , state , jobFaci , jobRaq};
console.log(interviewList)
    const jobExist =  interviewList.find(item => item.jobName === cardInfo.jobName);
     if(!jobExist){
       interviewList.push(cardInfo)
     }
       rejectList = rejectList.filter(item => item.jobName != cardInfo.jobName)
              if(currentState == 'filter-interview'){
            interviewRender()
          }
       if(currentState == 'filter-reject'){
            rejectRender()
          }
    
jobCalculate()

 }else if(e.target.classList.contains('btn-error')){
    const parentNode = e.target.parentNode.parentNode;
      const jobName = parentNode.querySelector('.company').innerText;
      const jobRole = parentNode.querySelector('.role').innerText;
      const jobstate = parentNode.querySelector('.state');
       const state =   jobstate.innerHTML = "Rejected";
        jobstate.classList.add("btn-error", 'btn', "btn-sm" )

      const dltBtn = parentNode.querySelector('.fa-trash-can')

      const jobFaci = parentNode.querySelector('.facilities').innerText;
      const jobRaq = parentNode.querySelector('.req').innerText;
console.log(dltBtn)
       
      const cardInfo = {jobName , jobRole , state , jobFaci , jobRaq };

    const jobExist =  rejectList.find(item => item.jobName === cardInfo.jobName);
     if(!jobExist){
       rejectList.push(cardInfo)
     }

  
        interviewList = interviewList.filter(item => item.jobName != cardInfo.jobName)
          if(currentState == 'filter-interview'){
            interviewRender()
          }
                 if(currentState == 'filter-reject'){
            rejectRender()
          }
         

jobCalculate()
// rejectRender();
 }
})
function interviewRender(){
     
    filterSection.innerHTML = ' '
      if(interviewList.length === 0){
        filterSection.innerHTML = `
            <div class="w-11/12 p-24 text-center space-y-4 border border-black mt-3 rounded">
                <i class="fa-regular fa-file-lines text-7xl text-green-400"></i>
                <h3>No Interview Job</h3>
            </div>
        `;
        return;
    }

    for(let interview of interviewList ){
        console.log(interview)
      
     
        let div = document.createElement('div');
          div.className = 'flex flex-col md:flex-row justify-between gap-6 bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300'
        div.innerHTML =`
              <div class="space-y-3">
        <div>
          <h2 class="text-2xl company font-bold text-slate-800">
            ${interview.jobName}
          </h2>
          <p class="text-slate-600 role">${interview.jobRole}</p>
        </div>
        <p class="state text-black">${interview.state}</p>
        <p class="text-slate-500 facilities text-sm font-medium">
         ${interview.jobFaci}
        </p>

        <p class="text-slate-600 req">
        ${interview.jobRaq}
        </p>

        <div class="flex gap-3 pt-2">
          <button class="btn btn-success btn-sm">Interview</button>
          <button class="btn btn-error btn-sm">Rejected</button>
        </div>
      </div>

      <div class="flex items-start justify-end">
        <button class="btn btn-outline btn-sm"><i class="fa-regular fa-trash-can"></i></button>
      </div>
        `
        filterSection.appendChild(div)
        let totalInterview = interviewList.length;
      console.log(totalInterview)
    }
     interview.innerText = interviewList.length;
}
function rejectRender(){
     
    filterSection.innerHTML = ' '

  if(rejectList.length === 0){
        filterSection.innerHTML = `
            <div class="w-11/12 p-24 text-center space-y-4 border border-black mt-3 rounded">
                <i class="fa-regular fa-file-lines text-7xl text-green-400"></i>
                <h3>No Interview Job</h3>
            </div>
        `;
        return;
    }
    for(let reject of rejectList ){
        console.log(reject)
      
     
        let div = document.createElement('div');
          div.className = 'flex flex-col md:flex-row justify-between gap-6 bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300'
        div.innerHTML =`
              <div class="space-y-3">
        <div>
          <h2 class="text-2xl company font-bold text-slate-800">
            ${reject.jobName}
          </h2>
          <p class="text-slate-600 role">${reject.jobRole}</p>
        </div>
        <p class="state text-black">${reject.state}</p>
        <p class="text-slate-500 facilities text-sm font-medium">
         ${reject.jobFaci}
        </p>

        <p class="text-slate-600 req">
        ${reject.jobRaq}
        </p>

        <div class="flex gap-3 pt-2">
          <button class="btn btn-success btn-sm">Interview</button>
          <button class="btn btn-error btn-sm">Rejected</button>
        </div>
      </div>

      <div class="flex items-start justify-end">
        <button class="btn btn-outline btn-sm"><i class="fa-regular fa-trash-can"></i></button>
      </div>
        `
        filterSection.appendChild(div)
        reject.innerText = rejectList.length;
        let totalInterview = interviewList.length;
      console.log(totalInterview)
    }
} 