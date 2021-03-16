
function getPostById(postID) {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts/' + postID,
        type: "GET",
        success: function (data) {

            var template = $(`<div class="container">
             <div class="text-center>
                        <h1>${data.title}</h1>
                    </div>
                    <p>${data.body}</p>
                </div>
            </div>`)
            template.appendTo("#newArticle");
        }
    })


}



// var template = $(`<article class="blog-post mb-3 shadow">
//     <div class="row">
//         <div class="col-sm-4">
//             <a href="#"><img class="img-fluid" src="img/image4.jpg" alt=""></a>
//         </div>
//         <div class="col-sm-8">
//             <a href="#">
//                 <h3 class="m-0 mt-2">${data.title}</h3>
//             </a>
//             <p class="m-0 nt-2">${data.body}
//             </p>

//         </div>
//     </div>
// </article>`




$(document).ready(function () {
    var url = new URL(window.location.href)
    var postID = url.searchParams.get('id')
    getPostById(postID)


    function saveEmail() {
        var inputEmail = $(".email").val()
        localStorage.setItem("email", inputEmail)
       }
     $(".btn-success").click(saveEmail())
    
  


})

