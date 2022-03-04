function welcome() {
    loadSection("A");
    if (document.cookie != "true") {
        document.cookie = "true";
        var myModal = new bootstrap.Modal(document.getElementById('welcome'), {
            keyboard: false
        });
        var modalToggle = document.getElementById('toggleMyModal');
        myModal.show(modalToggle); 
    }
}


function loadSection() {
    var letter = window.location.hash.slice(1);
    url = "https://docs.google.com/spreadsheets/d/1XYnKVNYbxarQPCxJTDxOBADRD0vV2v_rFpdU2TwGXyc/gviz/tq?sheet=" + letter;

    if (letter) {
        var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
        collapseElementList.map(function (collapseEl) {
            return new bootstrap.Collapse(collapseEl)
        })
    }
    
    var main = document.getElementById("main");

    if (document.getElementById("child") != null) {
        main.removeChild(document.getElementById("child"));
    }
    
    var child = document.createElement("div");
    child.setAttribute("id", "child");
    main.appendChild(child);

    fetch(url)
        .then(res => res.text())
        .then(rep => {
            const data = JSON.parse(rep.substring(47).slice(0, -2));
            rows = data.table.rows;

            if (rows.length <= 1) {
                _emptyPage(child, letter);
            } else {
                h1 = document.createElement("h1");
                h1.innerHTML = letter;
                h1.setAttribute("class", "text-center  text-shadow");
                child.appendChild(h1);
                rows.forEach((heading, index) => {
                    if (index < 1) {return;} 
                    var n = heading.c[0].v;
                    var u = heading.c[1].v;
                    var d = heading.c[2].v;
                    var l = heading.c[3].v;
                    console.log(heading.c[0].v);
                    _cardBuilder(child, n, u, d, l);
                })   
            }
        }) 
}

function _emptyPage(child, letter) {
    if (letter == "") letter = "A";

    var div = document.createElement("div");
    div.setAttribute("class", "m-auto text-md-center");
    child.append(div);

    var h5 = document.createElement("h5");
    h5.setAttribute("class", "text-center");
    h5.innerHTML = "Sorry, there are still no entries for the letter <b>" + letter + "</b>";
    div.appendChild(h5);

    var p = document.createElement("p");
    p.setAttribute("class", "text-center");
    p.innerHTML = "Help us out by visiting <a href='/pages/submission.html'>Submission</a>, and propose a organization's website !";
    div.appendChild(p);
}

function _cardBuilder(sec, name, url, decp, logo) {
    var div = document.createElement("div");
    div.setAttribute("class", "card border-0 shadow")
    div.setAttribute("href", url);
    sec.appendChild(div);

    var div1 = document.createElement("div");
    div1.setAttribute("class", "row");
    div.appendChild(div1);

    var div11 = document.createElement("div");
    div11.setAttribute("class", "col-md-2 align-items-center");
    div1.appendChild(div11);

    var img = document.createElement("img");
    img.setAttribute("class", "card-img-top");
    img.setAttribute("src", logo);
    div11.appendChild(img);

    var div12 = document.createElement("div");
    div12.setAttribute("class", "col");
    div1.appendChild(div12);

    var div121 = document.createElement("div");
    div121.setAttribute("class", "card-body");
    div12.appendChild(div121);

    var h2 = document.createElement("h2");
    h2.setAttribute("class", "card-title");
    h2.innerHTML = name;
    div121.appendChild(h2);

    var p = document.createElement("p");
    p.setAttribute("class", "card-text");
    p.innerHTML = decp;
    div121.appendChild(p);

    var a = document.createElement("a");
    a.setAttribute("class", "btn align-items-end");
    a.setAttribute("type", "button");
    a.setAttribute("target", "_blank");
    a.setAttribute("href", url);
    a.innerHTML = "Visit";
    div121.appendChild(a);
}