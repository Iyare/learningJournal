const articlesContainer = document.querySelector("#articles");
const imageBaseUrl = "assets/post"


fetch("./data.json")
    .then(response => {
        if (!response.ok) {
            throw new Error(`Data file could not be retrieved. Status code: ${response.status}`)
        } else {
            return response.json();
        }
    })
    .then(data => { 
        data.forEach((post,index) => {
            // create an article element
            const article = document.createElement("article");
             
            // Create an image element for the post's image and set it's "alt" and "src" attributes
            const postImage = document.createElement("img");
            postImage.setAttribute("src", `${imageBaseUrl}-${index}.jpg`);
            postImage.setAttribute("alt", `${post.title}`);
            
            // Create a span element and add the class of "date" to apply css stylings to it
            const postDate = document.createElement("span");
            // Assign element to object's title
            postDate.innerText = post.date;
            postDate.setAttribute("class", "date");
            
            // Create a heading element (h2) and assign it's content to the object's title
            const postTitle= document.createElement("h2");
            postTitle.textContent = post.title;
            
            // create a paragraph element and assign it's content to the post's content.
            const postContent = document.createElement("p");
            postContent.textContent = post.content;
            
            // Nest everything in the article element
            article.append(postImage, postDate, postTitle, postContent)
            
            // render to UI by appending to articles DOM
            articlesContainer.append(article)
        })
    })
    

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



