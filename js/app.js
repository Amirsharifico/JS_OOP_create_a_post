//AAAAAAAAAAAAA
class Post {
    constructor(title, author, body){
        this.title=title;
        this.author=author;
        this.body=body;

    }
}

class UI{
    addPostToList(post){

        //Get Posts list
        const list = document.getElementById("post-list");

        // Create tr element
        const row = document.createElement("tr");

        // Insert columns
        row.innerHTML=`
        <th>${post.title}</th>
        <th>${post.author}</th>
        <th>${post.body}</th>
        <td><i class="fas fa-times text-danger delete"</i></td>
        `;

        list.appendChild(row)

    }

}

document.getElementById("post-form").addEventListener("submit", function(e){

    //Get Form values
    const title =document.getElementById("title").value;
    const author =document.getElementById("author").value;
    const body =document.getElementById("body").value;

    // post initiation
    const post = new Post(title, author,body)

    console.log(post)

    //Instatntiate UI
    const ui = new UI();

    // add post to list
    ui.addPostToList(post);


    e.preventDefault();
})