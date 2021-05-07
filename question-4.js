// Let’s see we an api url www.example.com / api / get / 1
// Write a sample code to call this rest api and display the result.


//Note:-Above provided api is not working so i am using https://jsonplaceholder.typicode.com/posts/1
function getData(){
    let p = document.getElementById("para")
   let title = document.getElementById("title")
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                p.innerText =
                    this.responseText;
                    let data =JSON.parse(this.responseText)
                    
                    title.innerText = data.title
                    p.innerText = data.body
            }
        };
        xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
        xhttp.send();
    }

getData()
// {
//     "userId": 1,
//         "id": 1,
//             "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//                 "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// }