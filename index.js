
const cardContainer = document.getElementById('card-container');
const content = document.getElementById('content');
const btn = document.getElementById('btn');
const body = document.getElementById('body');
let img = document.createElement('img');
let h2 = document.createElement('h2');
let h3 = document.createElement('h3');
let p = document.createElement('p');
let left = document.getElementById('left'); 
let right = document.getElementById('right');
let idOflastImage = 0;

let url_One = 'images/image_1.jpg';
let url_Two = 'images/image_2.jpg';
let url_Three = 'images/image_3.jpg';
let url_Four = 'images/image_4.jpg';
let url_Five = 'images/image_5.jpg';

content.append(img);
content.append(h2);
content.append(h3);
content.append(p);
img.setAttribute('class', 'profile-image');

let authors = [{
    id : 1,
    image : 'images/image_1.jpg',
    author : "Marcus Rashford", 
    role : 'Web Developer',
    content : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi itaque, maxime suscipit exercitationem eligendi ad et recusandae voluptatibus natus, ipsum distinctio ipsa deserunt rem aut error dolorem consectetur similique nam voluptatem voluptate mollitia perspiciatis nobis numquam. Enim esse dolorum accusamus voluptates ducimus corrupti recusandae quasi. Soluta nemo similique totam aspernatur.'
},
{
    id : 2,
    image : 'images/image_2.jpg', 
    author : 'Peter Jones', 
    role : 'Data Scientist',
    content : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi itaque, maxime suscipit exercitationem eligendi ad et recusandae voluptatibus natus, ipsum distinctio ipsa deserunt rem aut error dolorem consectetur similique nam voluptatem voluptate mollitia perspiciatis nobis numquam. Enim esse dolorum accusamus voluptates ducimus corrupti recusandae quasi. Soluta nemo similique totam aspernatur.'
}, 
{
    id : 3,
    image : 'images/image_3.jpg', 
    author : 'Bill Anderson', 
    role : 'THE BOSS',
    content : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi itaque, maxime suscipit exercitationem eligendi ad et recusandae voluptatibus natus, ipsum distinctio ipsa deserunt rem aut error dolorem consectetur similique nam voluptatem voluptate mollitia perspiciatis nobis numquam. Enim esse dolorum accusamus voluptates ducimus corrupti recusandae quasi. Soluta nemo similique totam aspernatur.'
}, 
{
    id : 4,
    image : 'images/image_4.jpg', 
    author : 'Antony Dave', 
    role : 'System Designer',
    content : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi itaque, maxime suscipit exercitationem eligendi ad et recusandae voluptatibus natus, ipsum distinctio ipsa deserunt rem aut error dolorem consectetur similique nam voluptatem voluptate mollitia perspiciatis nobis numquam. Enim esse dolorum accusamus voluptates ducimus corrupti recusandae quasi. Soluta nemo similique totam aspernatur.'
}, 
{
    id : 5, 
    image : 'images/image_5.jpg', 
    author : 'Jadon Sancho', 
    role : 'CEO',
    content : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi itaque, maxime suscipit exercitationem eligendi ad et recusandae voluptatibus natus, ipsum distinctio ipsa deserunt rem aut error dolorem consectetur similique nam voluptatem voluptate mollitia perspiciatis nobis numquam. Enim esse dolorum accusamus voluptates ducimus corrupti recusandae quasi. Soluta nemo similique totam aspernatur.'
}];

function loadContent () {
    img.src = authors[0]['image'];
    h2.innerText = authors[0]['author'];
    h3.innerText = authors[0]['role'];
    p.innerText = authors[0]['content'];
    idOflastImage = authors[0]['id'];
}

btn.addEventListener('click', () => {
    let randomNumber = Math.floor (Math.random() * authors.length);
    let randomAuthor = authors[randomNumber];
    img.src = randomAuthor['image'];
    h2.innerText = randomAuthor['author'];
    h3.innerText = randomAuthor['role'];
    p.innerText = randomAuthor['content'];
    idOflastImage = randomAuthor['id'];
})  

right.addEventListener ('click', () => {
    let newID = idOflastImage++;
    if (newID >= authors.length) {
        let newElement = authors[0];
        img.src = authors[0]['image'];
        h2.innerText = authors[0]['author'];
        h3.innerText = authors[0]['role'];
        p.innerText = authors[0]['content'];  
        idOflastImage = authors[0]['id'];
    } else {
        let newElement = authors[newID];
        img.src = newElement['image'];
        h2.innerText = newElement['author']; 
        h3.innerText = newElement['role'];
        p.innerText = newElement['content'];
    }
});
right.addEventListener('mouseover', () => {
    right.style.transform = 'scale(1.3,1.3)';
    right.style.transform = 'rotate(-20deg)';
    right.style.transition = 'transform .1s';
})

right.addEventListener('mouseout', () => {
    right.style.transform = '';
})

left.addEventListener ('click', () => {
    let newID = idOflastImage--;
    console.log(newID);
    if (newID < 1) {
        let newElement = authors[4];
        img.src = authors[4]['image'];
        h2.innerText = authors[4]['author'];
        h3.innerText = authors[4]['role'];
        p.innerText = authors[4]['content'];  
        idOflastImage = authors[4]['id'];
    } else {
        let newElement = authors[newID - 1];
        img.src = newElement['image'];
        h2.innerText = newElement['author']; 
        h3.innerText = newElement['role'];
        p.innerText = newElement['content'];
    }
});

left.addEventListener('mouseover', () => {
    left.style.transform = 'scale(1.3,1.3)';
    left.style.transform = 'rotate(20deg)';
    left.style.transition = 'transform .1s';
})

left.addEventListener('mouseout', () => {
    left.style.transform = '';
})