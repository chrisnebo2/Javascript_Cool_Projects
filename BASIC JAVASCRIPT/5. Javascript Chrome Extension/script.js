let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") );
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push( (tabs[0].url) );
        localStorage.setItem("myLeads", JSON.stringify(myLeads) );
        render(myLeads);
        inputEl.focus();
    })
})

deleteBtn.addEventListener("dblclick", function(){
    if(myLeads){
        localStorage.clear();
        myLeads = [];
        render(myLeads);
        inputEl.focus();
    }
})


inputBtn.addEventListener("click", function (){
    if (inputEl.value && inputEl.value !== " "){
        myLeads.push(inputEl.value);
        inputEl.value = "";
        inputEl.focus();
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    }
})

function render(leads){
    let listItems = "";
    for (let i = 0; i < leads.length; i++){

        // listItems +=  "<li><a target='_blank' href=" + myLeads[i] + ">" + myLeads[i] + "</a></li>";
        listItems +=  
        `<li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>`;
    }
    
    ulEl.innerHTML = listItems;
}
