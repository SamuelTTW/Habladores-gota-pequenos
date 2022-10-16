
        const codigo = 'SKU: 2202031';
        const descripcion = 'BOLSA CLIENTE DORITOS CHESMINANIA VENTO AUREO';
        const precio = '2,40';


const placetoAdd = document.querySelector('.insert');


    placetoAdd.insertAdjacentHTML('afterbegin',`

    <div class="base">

    <div class="gota">
        <h1 class="precio">${precio}</h1>
    </div>

    <h3 class="code">${codigo}</h3>

    <p class="descripcion">${descripcion}</p>

</div>

<div class="base">

<div class="gota">
    <h1 class="precio">${precio}</h1>
</div>

<h3 class="code">${codigo}</h3>

<p class="descripcion">${descripcion}</p>

</div>

<div class="base">

<div class="gota">
    <h1 class="precio">${precio}</h1>
</div>

<h3 class="code">${codigo}</h3>

<p class="descripcion">${descripcion}</p>

</div>

<div class="base">

<div class="gota">
    <h1 class="precio">${precio}</h1>
</div>

<h3 class="code">${codigo}</h3>

<p class="descripcion">${descripcion}</p>

</div>







`);




