export function loadHome() {
    const content = document.querySelector("#content");
    const header = document.createElement("h1");
    header.textContent = "Welcome to Mediocre Food Stall";
    const body = document.createElement("div");
    body.textContent = `Not the best, not the worst. Just mediocre.
            Are you ever just craving some mediocre food?
            We got you covered! From unseasoned egg sandwiches cooked to perfection,
            or a caesar salad that will have you hopping to the bathroom before you're finished,
            we have all you need to leave full but unsatisfied.`
    content.appendChild(header);
    content.appendChild(body);
}

export function loadMenu() {
    const content = document.querySelector("#content");
    const header = document.createElement("h1");
    header.textContent = "Our Not-So-Great Menu!";
    const list = document.createElement("ul");
    const item1 = document.createElement("li");
    item1.textContent = "$15 Coffee, Just a regular coffee, but it's $15!";
    const item2 = document.createElement("li");
    item2.textContent = "$6 Caesar Salad, We use expired ingredients and dressing!";
    const item3 = document.createElement("li");
    item3.textContent = "$5 Egg Sandwich, Unsalted, Unseasoned.";
    list.appendChild(item1);
    list.appendChild(item2);
    list.appendChild(item3);
    content.appendChild(header);
    content.appendChild(list);
}

export function loadAbout() {
    const content = document.querySelector("#content");
    const header = document.createElement("h1");
    header.textContent = "Important Information!";
    const body = document.createElement("div");
    body.textContent = `We are not responsible for any unsatisfied customers. By purchasing any
                        menu item you are agreeing to not be compensated or reimbursed in any case.`
    content.appendChild(header);
    content.appendChild(body);
}