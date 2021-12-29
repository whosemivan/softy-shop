const registrationFrom = document.forms.registrationForm;
const loginForm = document.forms.loginForm;

registrationFrom.addEventListener("submit", e => {
    e.preventDefault();
    let body = {};
    for (let i = 0; i < e.target.elements.length; i++) {
        let child = e.target.elements[i];
        if (child.name) {
            body[child.name] = child.value;
        }
    }
    body["role"] = "admin";
    sendForm(body, e.target.method, "/auth/registration");
});

loginForm.addEventListener("submit", e => {
    e.preventDefault();
    let body = {};
    for (let i = 0; i < e.target.elements.length; i++) {
        let child = e.target.elements[i];
        if (child.name) {
            body[child.name] = child.value;
        }
    }
    sendForm(body, e.target.method, "/auth/login");
});

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
    console.log(msg);
};