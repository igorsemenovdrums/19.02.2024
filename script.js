
let user = {
    'name': prompt("Enter your name:"),
    'age': +prompt("Enter your age:"),
    'email': prompt("Enter your email:"),
};

for (let key in user) {
    let value = user[key];
    console.log(key+" > "+value);
};