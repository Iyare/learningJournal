// "use strict";
const posts = fetch("./data.json")
.then(response => {
    if (!response.ok) {
        throw new Error(`Data file could not be retrieved. Status code: ${response.status}`)
    }
    return response.json();
}).then(data => {
    console.log(data)
    return data;
}).catch(error => {
    console.error("There was a problem with the fetch operation", error)
});

console.log(posts)