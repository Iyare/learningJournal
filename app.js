const articlesContainer = document.querySelector("#articles");
const imageBaseUrl = "assets/post"


const posts = fetch("./data.json")
.then(response => {
    if (!response.ok) {
        throw new Error(`Data file could not be retrieved. Status code: ${response.status}`)
    }
    return response.json();
}).then(data => {
    // console.log(data)
    
    return data;
}).catch(error => {
    console.error("There was a problem with the fetch operation", error)
});

console.log(posts);

function renderUI() {
    articlesContainer.innerHTML = `<p>testing</p>`
}

/* Workflow
1. Create an "article element"
2. Add the class "container" to the  element
3. Create an image element and point the source attribute the the corresponding image in the assets folder.
4. add an "alt" attribute to correspond with the title of the post
5. Create a span tag and add a class called "date" to the tage
6. Create a h2 tag and add the content of the post inside the heading.
7. Create a paragraph tag and add the respective content from the post object. 
8. append all other tags sequentially to the article tag.
9. Render the article tag.

 */

/* posts.forEach((post, index) => {
    
    const article = document.createElement("article");
    article.setAttribute("class", "container");
    
    const postImage = document.createElement("img");
    postImage.setAttribute("src", `${imageBaseUrl}-${index}`);
    postImage.setAttribute("alt", `${post.title}`);
    
    const postDate = document.createElement("span");
    postDate.innerText = `${post.date}`;
    
    const postTitle= document.createElement("h2");
    postTitle.textContent = `${post.title}`;
    
    const postContent = document.createElement("p");
    postContent.textContent = `${post.content}`;
    
        
    article.appendChild(postImage, postDate, postTitle, postContent)
    console.log(article)
})  */

