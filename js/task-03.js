const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryEl = document.querySelector(".gallery");
// console.log(galleryEl);



const listGallery = item => {
  return `<li><img src="${item.url}" alt="${item.alt}" width="350" height="200"/></li>`;
};

const markup = images.map(listGallery).join('');
// console.log(markup);
galleryEl.insertAdjacentHTML('beforeend', markup);

galleryEl.style.cssText = `
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
list-style-type: none;
margin: 0;`