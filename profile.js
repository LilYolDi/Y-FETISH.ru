// ===============================
// Личный профиль Y-FETISH
// ===============================


const box = document.getElementById("myProfile");


let profiles = JSON.parse(
    localStorage.getItem("profiles")
) || [];



if(profiles.length === 0){

    box.innerHTML = `
    <h2>
    У вас нет анкеты
    </h2>

    <a href="add.html">
    Создать анкету
    </a>
    `;

} else {


let profile = profiles[profiles.length - 1];



box.innerHTML = `


${
profile.photo

? `<img 
src="${profile.photo}"
class="big-photo">`

: `<div class="no-photo">
Нет фото
</div>`

}



<h2>
${profile.name}, ${profile.age}
</h2>


<p>
📍 ${profile.city}
</p>


<p>
${profile.description}
</p>



<button onclick="deleteProfile(${profile.id})">
Удалить анкету
</button>


`;

}




function deleteProfile(id){


let profiles = JSON.parse(
localStorage.getItem("profiles")
) || [];



profiles = profiles.filter(
p => p.id != id
);



localStorage.setItem(
"profiles",
JSON.stringify(profiles)
);



alert("Анкета удалена");


location.reload();


}