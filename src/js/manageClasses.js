const addClass = (element, className = 'hidden')=> {
    element.classList.add(className);
};

const removeClass = (element, className = 'hidden')=> {
    element.classList.remove(className);
};

const toggleClass = (element, className = 'hidden')=> {
    element.classList.toggle(className);
};

export{addClass, removeClass, toggleClass}