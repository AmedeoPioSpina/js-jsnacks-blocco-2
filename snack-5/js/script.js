const start = () => {
    const newElement = createChildParent("div", "p");
    htmlAddElement("body", newElement);
}

const createChildParent = (parentElementTag, childElementTag) => {
    const newParentElement = document.createElement(parentElementTag);
    const newChildElement = document.createElement(childElementTag);
    newParentElement.appendChild(newChildElement);
    return newParentElement;
}

const htmlAddElement = (parentTarget, childTarget) => {
    parentTarget = document.querySelector(parentTarget);
    parentTarget.appendChild(childTarget);
}

start();