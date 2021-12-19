// toggle menu function
function Toggle() {
    document.getElementById('hamburger').classList.toggle('menu');
}



const bodi = document.querySelector("body");
const nav = document.querySelector('nav')




const weekDays = ["Mon","Tue","Wed","Thur","Fri","Sat","Sun"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const ref = document.querySelector('#esc');

const timeObj = new Date();
const month = months[timeObj.getMonth(document.lastModified)];
const date = timeObj.getDate(document.lastModified);
const year = timeObj.getFullYear(document.lastModified);

ref.innerHTML = `Last Updated: ${date} ${month},  ${year}`;

//  list of registered enterprise from directory.json
const gridList = document.querySelector('.grid-list-views');
const gridViews = document.querySelector('.grid-view');
const listView = document.querySelector('.list-view button');


fetch("json-directory/directory.json").then(res=> {
    return res.json();
}).then(ask=> {
    console.log(ask);
    let list = ask["companies"]

   list.forEach(list => {
    let gridList = document.querySelector('.grid-list-views');
    let section = document.createElement('section');
    let name = document.createElement('p');
    let address = document.createElement('p');
    let desc = document.createElement('p');
    let email = document.createElement('p');
    let image = document.createElement('img');

    name.textContent = `Name: ${list.name}`;
    address.textContent = `Address: ${list.address}`;
    desc.textContent = `Description: ${list.description}`;
    email.textContent = `Email: ${list.email}`;

    image.setAttribute('src', `${list.image}`);
    image.setAttribute('alt',`${list.name}`);

    section.appendChild(image);
    section.appendChild(name);
    section.appendChild(address);
    section.appendChild(desc);
    section.appendChild(email);
    gridList.appendChild(section);





   }); 
       

});


    function blockView() {
        
        gridList.style.display = "block";
    };

    function gridView() {
        gridList.style.display = "grid";
    }

    listView.addEventListener("click",blockView);
    gridViews.addEventListener("click", gridView);