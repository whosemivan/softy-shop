const form = document.forms.loginForm || document.forms.registrationForm;

if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();
        let body = {};
        for (let i = 0; i < e.target.elements.length; i++) {
            let child = e.target.elements[i];
            if (child.name) {
                body[child.name] = child.value;
            };
        };
        sendForm(body, e.target.method, form.id != "registrationForm" ? "/auth/login" : "/auth/registration");
    });
};

const errorMsgBox = document.getElementById("error-msg");
const sendForm = async (body, method, path) => {
    let response = await fetch(path, {
        method: method,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
    let array = await response.json();
    let {msg, data} = array;
    data != null ? sessionStorage.setItem('user-key', data) : '';

    let {status, text} = msg;
    console.log(text);
    errorMsgBox.innerText = text;

    if (status >= 200 && status <= 299) {
        window.location="/";
    };
};