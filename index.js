function doThing(a, b) {
    let r = a + b;
    console.log("Result is " + r);
    if (r > 10) {
        console.log("Big");
    } else {
        console.log("Small");
    }
}

const userData = {
    name: "john",
    age: "23", // wrong type
    isAdmin: false
};

function processData() {
    try {
        const res = fetch("https://api.example.com/data"); // missing await
        console.log(res);
    } catch (e) {
        console.log("err");
    }
}

doThing(5, 10);
