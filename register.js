document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("registerBtn");

    btn.onclick = function () {

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const password2 = document.getElementById("password2").value;

        if (
        username === "" ||
        email === "" ||
        password === "" ||
        password2 === ""
    )   {
        alert("Заполните все поля!");
        return;
        }

        if (password !== password2) {
            alert("Пароли не совпадают!");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users"));

        if (!users) {
            users = [];
        }

        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                alert("Такой e-mail уже зарегистрирован!");
                return;
            }
        }

        const newUser = {
            username: username,
            email: email,
            password: password
        };

        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));

        alert("Аккаунт успешно создан!");

        window.location.href = "login.html";

    };

});