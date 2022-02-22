//Trasformo i tre array imgCarousel, imgPlaces ed imgDescription in un unico array composto da oggetti
const carouselObjects = [
    {
        image : 'img/img-1.jpg',
        place : 'Capo Milazzo',
        description : 'Capo Milazzo è il capo col quale si conclude a ovest il golfo di Milazzo e inizia il golfo di Patti. Si trova nel territorio di Milazzo, comune italiano della città metropolitana di Messina.',
        active: true
    },
    {
        image : 'img/img-2.jpg',
        place : 'Laghetti di Marinello',
        description : 'La riserva naturale orientata Laghetti di Marinello è un\'area naturale protetta situata nel comune di Patti, in provincia di Messina. La riserva occupa oltre 400 ettari ed è stata istituita nel 1998.',
        active: false
    },
    {
        image : 'img/img-3.jpg',
        place : 'Santa Tecla',
        description : 'Posta a nord-est di Acireale, Santa Tecla si adagia su una suggestiva piattaforma lavica: a Ovest si attacca alla lussureggiante e selvaggia Timpa "Falconiera" con la sua incolta flora mediterranea (oggi parco naturale protetto), mentre a Est si distende sul mare Ionio in una compatta e imponente scogliera di roccia vulcanica.',
        active: false
    },
    {
        image : 'img/img-4.jpg',
        place : 'Forza D\'Agrò',
        description : 'Forza d\'Agrò (\'a Forza in siciliano) è un comune italiano di 849 abitanti[2] della città metropolitana di Messina in Sicilia.',
        active: false
    },
    {
        image : 'img/img-5.jpg',
        place : 'Capo Alì',
        description : 'La spiaggia di Capo Alì si trova poco distante dal centro di Alì Terme e si raggiunge con una camminata via spiaggia di circa 20 minuti.',
        active: false
    },
    {
        image : 'img/img-6.jpg',
        place : 'Vulcano Etna',
        description : 'L\'Etna è uno stratovulcano complesso della Sicilia originatosi nel Quaternario, ed è il più alto vulcano attivo della placca euroasiatica. Le sue frequenti eruzioni nel corso del tempo hanno modificato, a volte anche profondamente, il paesaggio circostante e in tante occasioni hanno costituito una minaccia per gli insediamenti abitativi nati nel tempo alle sue pendici. Il 21 giugno 2013, la XXXVII sessione del Comitato UNESCO ha inserito l\'Etna nell\'elenco dei beni costituenti il Patrimonio dell\'umanità.',
        active: false
    },
];
console.log(carouselObjects);

//salvo gli elementi HTML in delle variabili così da poterle utilizzare in JS
const slidesWrapper = document.getElementsByClassName('slides-wrapper')[0];
console.log(slidesWrapper);

const imgPreview = document.getElementsByClassName('img-preview')[0];
console.log(imgPreview);

const nextImg = document.querySelector('.next');
console.log(nextImg);

const prevImg = document.querySelector('.prev');
console.log(prevImg);
//creo una variabile che userò dopo per gestire la classe active
let activeClass = 0;

//Faccio un ciclo forEach da sostituire al precedente ciclo For
carouselObjects.forEach((carouselSlide) => {
    //sostituisco il metodo precedente con la destrutturazione degli oggetti nell'Array
    let {image, place, description} = carouselSlide;
    //Creo un div "item" che conterrà un'immagine e un titolo/descrizione
    const item = document.createElement('div');
    item.classList.add('item');
    slidesWrapper.append(item);
    //Creo un tag img e un h1 che unisco al div "item" nell'HTML
    const imgItem = `<img src="${image}">`;
    item.innerHTML += imgItem;

    const imgTitle = `<h1 class="title">${place}</h1>`;
    item.innerHTML += imgTitle;

    const imgParagraph = `<p class="description">${description}`
    item.innerHTML += imgParagraph;

    const controlWrapper = `<div class="control-wrapper">
                                <img src="${image}">
                            </div>`;
    imgPreview.innerHTML += controlWrapper;
});

// --------------Superbonus da requestAnimationFrame, probabilmente è errato
let i = 0;
//creo una costante items simile ad un Array con dentro gli elementi con classe item, ai quali aggiungerò la classe item quando necessario
const items = [...document.getElementsByClassName('item')];
console.log(items);
const overlayActive = [...document.getElementsByClassName('control-wrapper')];

let {image, place, description, active} = carouselObjects[i];
if(active){
    items[i].classList.add('active');
    overlayActive[i].classList.add('active');
}

nextImg.addEventListener('click', function(){
    if(i == activeClass){
        active = true;
    }
    if(active){
        items[i].classList.remove('active');
        overlayActive[i].classList.remove('active');
        i++;
        activeClass ++;
        items[i].classList.add('active');
        overlayActive[i].classList.add('active');
    }
    // console.log(i);
    
    if(i == carouselObjects.length - 1){
        items[i].classList.remove('active');
        i = 0;
        activeClass = 0;
        items[i].classList.add('active');
    }
    
});

prevImg.addEventListener('click', function(){
    if(i == activeClass){
        active = true;
    }else{
        active = false;
    }
    if(active){
        items[i].classList.remove('active');
        overlayActive[i].classList.remove('active');
        i--;
        activeClass --;
        items[i].classList.add('active');
        overlayActive[i].classList.add('active');
    };
    if(i == 0){
        items[i].classList.remove('active');
        i = carouselObjects.length - 1;
        activeClass = carouselObjects.length - 1;
        items[i].classList.add('active');
    }
});
