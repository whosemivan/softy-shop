const addForm = document.querySelector(".admin-form");

addForm.addEventListener("submit", evt => {
    evt.preventDefault();
    let body = {};
    for (let i = 0; i < evt.target.elements.length; i++) {
        let child = evt.target.elements[i];
        if (child.name) {
            body[child.name] = child.value;
        }
        console.log(body);
    }
    sendForm(body, evt.target.method, "/api/add");
});

const sendForm = async(body, method, path) => {
    let response = await fetch(path, {
        method: method,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
    let data = await response.json();
    console.log(data);
}