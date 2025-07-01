const articlesContainer = document.querySelector("#articles");
const imageBaseUrl = "assets/post"
const header = document.querySelector("#header")

// Get the data file
fetch("./data.json")
    .then(response => {
        if (!response.ok) {
            throw new Error(`Data file could not be retrieved. Status code: ${response.status}`)
        } else {
            return response.json();
        }
    })
    .then(data => { 
        // iterate over the data
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
    


