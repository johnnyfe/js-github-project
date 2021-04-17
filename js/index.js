

function getData(value){
    return fetch(`https://api.github.com/search/users?q=${value}`, { 
        method:"get",
        headers:{
            "Accept": "application/vnd.github.v3+json"
        },
        body: JSON.stringify()
    })
    .then(resp=> resp.json())
    .then(obj=> obj.items.forEach((user)=>{
      const li=createLiLogin(user);
      appendLiLogin(li)
      const li2=createRepo(user);
      appendRepo(li2)
      const imageAvatar=createAvatar(user);
      appendAvatar(imageAvatar);

    }))
    };

const userList=document.getElementById('user-list');
const repoList=document.getElementById('repos-list');
function createLiLogin (user){
  const li = document.createElement('li')
  li.innerHTML=`${user.login}`;
  return li;
}
function appendLiLogin (li){
  userList.append(li)
}
function createRepo (user){
  const li2=document.createElement('li')
  const a= document.createElement('a')
  a.href=user.html_url
  a.innerText="Link Repository";
  li2.append(a);
  return li2;
}
function appendRepo (li2){
   repoList.append(li2)
}
function createAvatar (user){
  const li = document.createElement('li')
  const imageAvatar = document.createElement('img')
  imageAvatar.src=user.avatar_url
  li.style.cursor = "pointer"
  imageAvatar.style.width="20px"
  li.append(imageAvatar);
  return li
}
function appendAvatar (imageAvatar){
  userList.append(imageAvatar)
}

const bottonSubmit=document.getElementById('submit-button');
const searchBox=document.getElementById('search')
bottonSubmit.addEventListener("click", (e)=>{
    e.preventDefault()
    getData(searchBox.value);
})




/*function getData() {
    const url = 'https://api.github.com/users/octocat/repos';

    fetch(url, {
      method: "GET",
      headers: {"Accept": "application/vnd.github.v3+json"}
    })
    .then(response => response.json()) 
    
    .then(obj => renderUser(obj))
    .catch(err => console.log(err));
  }
  
  function renderUser(users) {
    const ul = document.querySelector('#user-list');
    users.forEach(user => {
      let li = document.createElement("li");
      li.innerHTML = `${user.avatar_url} ${user.url}`;
      ul.appendChild(li);
      console.log(user);
    });
  }
  
  const form = document.querySelector('#github-form')
  form.addEventListener('submit', event => {
    // submit event detected
    event.preventDefault()
  })*/