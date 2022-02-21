//creo un array con le immagini da inserire nell'HTML
const imgCarousel = [
    'img/img-1.jpg',
    'img/img-2.jpg',
    'img/img-3.jpg',
    'img/img-4.jpg',
    'img/img-5.jpg',
    'img/img-6.jpg'
];

//creo un array con i titoli delle immagini da inserire nell'HTML
const imgPlaces = [
    'Capo Milazzo',
    'Laghetti di Marinello',
    'Santa Tecla',
    'Forza D\'Agrò',
    'Capo Alì',
    'Vulcano Etna'
]

//creo un array con le Descrizioni delle immagini da inserire nell'HTML
const imgDescription = [
    'Capo Milazzo è il capo col quale si conclude a ovest il golfo di Milazzo e inizia il golfo di Patti. Si trova nel territorio di Milazzo, comune italiano della città metropolitana di Messina.',
    'La riserva naturale orientata Laghetti di Marinello è un\'area naturale protetta situata nel comune di Patti, in provincia di Messina. La riserva occupa oltre 400 ettari ed è stata istituita nel 1998.',
    'Posta a nord-est di Acireale, Santa Tecla si adagia su una suggestiva piattaforma lavica: a Ovest si attacca alla lussureggiante e selvaggia Timpa "Falconiera" con la sua incolta flora mediterranea (oggi parco naturale protetto), mentre a Est si distende sul mare Ionio in una compatta e imponente scogliera di roccia vulcanica.',
    'Forza d\'Agrò (\'a Forza in siciliano) è un comune italiano di 849 abitanti[2] della città metropolitana di Messina in Sicilia.',
    'La spiaggia di Capo Alì si trova poco distante dal centro di Alì Terme e si raggiunge con una camminata via spiaggia di circa 20 minuti.',
    'L\'Etna è uno stratovulcano complesso della Sicilia originatosi nel Quaternario, ed è il più alto vulcano attivo della placca euroasiatica. Le sue frequenti eruzioni nel corso del tempo hanno modificato, a volte anche profondamente, il paesaggio circostante e in tante occasioni hanno costituito una minaccia per gli insediamenti abitativi nati nel tempo alle sue pendici. Il 21 giugno 2013, la XXXVII sessione del Comitato UNESCO ha inserito l\'Etna nell\'elenco dei beni costituenti il Patrimonio dell\'umanità.'
]

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

for( let i = 0; i < imgCarousel.length; i++ ){
    // console.log(imgCarousel[i], imgPlaces[i]);
    //Creo un div "item" che conterrà un'immagine e un titolo/descrizione
    const item = document.createElement('div');
    item.classList.add('item');
    slidesWrapper.append(item);

    //Creo un tag img e un h1 che unisco al div "item" nell'HTML
    const imgItem = `<img src="${imgCarousel[i]}">`;
    item.innerHTML += imgItem;

    const imgTitle = `<h1 class="title">${imgPlaces[i]}</h1>`;
    item.innerHTML += imgTitle;

    const imgParagraph = `<p class="description">${imgDescription[i]}`
    item.innerHTML += imgParagraph;

    const controlWrapper = `<div class="control-wrapper">
                                <img src="${imgCarousel[i]}">
                            </div>`;
    imgPreview.innerHTML += controlWrapper;
    
}

//creo una costante items simile ad un Array con dentro gli elementi con classe item, ai quali aggiungerò la classe item quando necessario
const items = [...document.getElementsByClassName('item')];
console.log(items);
items[activeClass].classList.add('active');

const overlayActive = [...document.getElementsByClassName('control-wrapper')];
overlayActive[activeClass].classList.add('active');

nextImg.addEventListener('click', function(){

    if(activeClass < items.length -1){
        items[activeClass].classList.remove('active');
        overlayActive[activeClass].classList.remove('active');

        activeClass++;

        items[activeClass].classList.add('active');
        overlayActive[activeClass].classList.add('active');
    }else{
        items[activeClass].classList.remove('active');
        overlayActive[activeClass].classList.remove('active');

        activeClass = 0;

        items[activeClass].classList.add('active');
        overlayActive[activeClass].classList.add('active');
    }
});

prevImg.addEventListener('click', function(){
    if(activeClass > 0){
        items[activeClass].classList.remove('active');
        overlayActive[activeClass].classList.remove('active');

        activeClass--;

        items[activeClass].classList.add('active');
        overlayActive[activeClass].classList.add('active');
    }else{
        items[activeClass].classList.remove('active');
        overlayActive[activeClass].classList.remove('active');

        activeClass = items.length - 1;
        
        items[activeClass].classList.add('active');
        overlayActive[activeClass].classList.add('active');
    }
});

