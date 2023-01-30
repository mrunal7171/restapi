let boxcards = document.getElementById("cards");

let API = async () => {
    let response = await fetch("https://reqres.in/api/users?page=1")
    let file = await response.json();
    let info = file.data
        .map((Element) => {
            return <div class="card">
                   <div class="card-content"></div>
                   <h2>${Element.first_name} ${Element.last_name}</h2>
                   <h3>${Element.email}</h3>
                   <h3>User .Id : ${Element.id} </h3>
                   </div>;
              
            
        })
        .join("");
        boxcards.innerHTML = info;

};
let Btn = document.getElementById("user");
Btn.addEventListener("click",() => {
    Cards.innerHTML = '<h1 class="loading">loading user data...</h1>';
    setTimeout(() => {
        API();
    }, 3000);
});