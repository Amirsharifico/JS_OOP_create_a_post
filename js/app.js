
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

    showAlert(message, className) {

        // Create div
        const div = document.createElement('div');
    
        // Add classes
        div.className = `alert alert-${className}`;
    
        // Add text
        div.appendChild(document.createTextNode(message));
    
        // Get parent
        const col = document.querySelector('.col-sm-8');
    
        // Get form
        const form = document.querySelector('#post-form');
    
        // Insert alert
        col.insertBefore(div, form);
    
        // Timeout after 3 sec
        setTimeout(function(){
          document.querySelector('.alert').remove();
        }, 3000);
    
      }

    clearFields(){
        document.getElementById('title').value='';
        document.getElementById('author').value='';
        document.getElementById('body').value='';
    }

}

document.getElementById("post-form").addEventListener("submit", function(e){

    //Get Form values
    const title =document.getElementById("title").value;
    const author =document.getElementById("author").value;
    const body =document.getElementById("body").value;

    // post initiation
    const post = new Post(title, author,body)

    //Instatntiate UI
    const ui = new UI();

  // Validate
  if(title === '' || author === '' || body === '') {
    // Error alert
    ui.showAlert('All fields are required', 'danger');
  } else {
    // Add post to list
    ui.addPostToList(post);

    // Show success
    ui.showAlert('Post added', 'success');

    // Clear fields
    ui.clearFields();
  }

    e.preventDefault();
})