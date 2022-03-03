function sendData() {
    const url = "https://script.google.com/macros/s/AKfycbzriW940OQTroyyC4WbunLChdgTCogrf9QEMYAfRdddr2_OVuGjsCiU_wGVdCpRnoiD/exec"

    https://www.youtube.com/watch?v=VPI27L_fQC4

    var data = {
        name: "nome",//document.getElementById("name").value,
        url: "url" ,//document.getElementById("url").value,
        desc: "desc",//document.getElementById("desc").value
    };
    fetch(url, { 
        method: 'POST',
        body: JSON.stringify(data)
    })
}