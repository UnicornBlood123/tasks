export const card = (cardData) =>{
    const cardTamplate = cardData.map(el=>`<div class="item"><div class="name">${el.name}</div><img src="${el.imageUrl}"width='300' height="300" align="center"><div class="price">${el.price}р</div></div>`);
    document.body.innerHTML += `<h1 align="center">Фрукты</h1>`;
    document.body.innerHTML += `<div class="container">${cardTamplate.join('')}</div>`;
}
