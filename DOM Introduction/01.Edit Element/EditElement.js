function editElement(el, match, replacer) {
    let element = el.textContent;
    let result = element.split(match).join(replacer);
    
    el.textContent = result;
}