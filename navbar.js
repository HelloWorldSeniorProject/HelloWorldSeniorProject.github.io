class NavBar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode: 'open'});

        let itemlist = document.createElement("ul");
        this.shadowRoot.appendChild(itemlist);

        let logo = document.createElement("li");
        logo.innerHTML = '<a href="index.html"><b>Hello World!</b></a>';
        itemlist.appendChild(logo);

        let term1 = document.createElement("li");
        term1.innerHTML = '<a href="term1.html">Semester 1</a>';
        itemlist.appendChild(term1);

        let term2 = document.createElement("li");
        term2.innerHTML = '<a href="term2.html">Semester 2</a>';
        itemlist.appendChild(term2);

        let about = document.createElement("li");
        about.setAttribute('style', 'float:right');
        about.innerHTML = '<a href="about.html">About Us</a>';
        itemlist.appendChild(about);

        let style = document.createElement("style");
        style.textContent = `
        ul {
            list-style-type: none;
            overflow: hidden;
            position: fixed;
            margin: 0;
            padding: 0;
            top: 0;
            width: 100%;
            background-color: #655dbb;
        }

        ul li {
            float: left;
        }

        ul li a {
            display: block;
            text-align: center;
            padding: 12px;
            text-decoration: none;
            color: white;
        }

        ul li a:hover {
            background-color: #bface2;
            color: black;
        }
        `;
        this.shadowRoot.appendChild(style);
    }
}

customElements.define('nav-bar', NavBar);