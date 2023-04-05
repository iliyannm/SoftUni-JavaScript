window.addEventListener("load", solve);

function solve() {

    let gemNameElement = document.getElementById('gem-name');
    let colorElement = document.getElementById('color');
    let caratsElement = document.getElementById('carats');
    let priceElement = document.getElementById('price');
    let typeElement = document.getElementById('type')
    let addBtnElement = document.getElementById('add-btn');
    let previewListElement = document.querySelector('#preview-list');
    let collectionListElement = document.querySelector('#collection');


    addBtnElement.addEventListener('click', onAdd);
    function onAdd(e) {
        e.preventDefault();
        if (gemNameElement.value == ''
            || colorElement.value == ''
            || caratsElement.value == ''
            || priceElement.value == ''
            || typeElement.value == '') {
            return;
        }
        let liElementInfo = document.createElement('li');
        liElementInfo.setAttribute('class', 'gem-info');

        let articleElementInfo = document.createElement("article");

        let gemName = document.createElement('h4');
        gemName.textContent = `${gemNameElement.value}`;

        let color = document.createElement('p');
        color.textContent = `Color: ${colorElement.value}`;

        let carats = document.createElement('p');
        carats.textContent = `Carats: ${caratsElement.value}`

        let price = document.createElement('p');
        price.textContent = `Price: ${priceElement.value} $`;

        let type = document.createElement('p');
        type.textContent = `Type: ${typeElement.value}`;

        let editBtn = document.createElement("button");
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = 'Edit Information';

        let saveBtn = document.createElement("button");
        saveBtn.setAttribute('class', 'save-btn');
        saveBtn.textContent = 'Save to Collection';

        let cancelBtn = document.createElement("button");
        cancelBtn.setAttribute('class', 'cancel-btn');
        cancelBtn.textContent = 'Cancel';

        articleElementInfo.appendChild(gemName);
        articleElementInfo.appendChild(color);
        articleElementInfo.appendChild(carats);
        articleElementInfo.appendChild(price);
        articleElementInfo.appendChild(type);

        liElementInfo.appendChild(articleElementInfo);
        liElementInfo.appendChild(saveBtn);
        liElementInfo.appendChild(editBtn);
        liElementInfo.appendChild(cancelBtn);

        previewListElement.appendChild(liElementInfo);

        let editGemName = gemNameElement.value;
        let editColor = colorElement.value;
        let editCarats = caratsElement.value;
        let editPrice = priceElement.value;
        let editType = typeElement.value;

        gemNameElement.value = "";
        colorElement.value = "";
        caratsElement.value = "";
        priceElement.value = "";
        typeElement.value = "";
        addBtnElement.disabled = true;

        editBtn.addEventListener("click", onEdit);
        function onEdit() {
            gemNameElement.value = editGemName;
            colorElement.value = editColor;
            caratsElement.value = editCarats;
            priceElement.value = editPrice;
            typeElement.value = editType;

            liElementInfo.remove();

            addBtnElement.disabled = false;
        }

        saveBtn.addEventListener('click', onSave);
        function onSave() {
            let liElementSave = document.createElement('li');
            liElementSave.setAttribute('class', 'collection-item');

            let pElementSave = document.createElement("p");
            pElementSave.textContent = `${editGemName} - Color: ${editColor}/ Carats: ${editCarats}/ Price: ${editPrice}$/ Type: ${editType}`;


            liElementSave.appendChild(pElementSave);
            liElementInfo.remove();

            collectionListElement.appendChild(liElementSave)

            confirmBtn.addEventListener('click', onConfirm);
        }

        cancelBtn.addEventListener("click", onCancel);
        function onCancel() {
            liElementInfo.remove();
            addBtnElement.disabled = false;
        }
    }

}
