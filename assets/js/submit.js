function sendData() {
    const url = "https://script.google.com/macros/s/AKfycbzriW940OQTroyyC4WbunLChdgTCogrf9QEMYAfRdddr2_OVuGjsCiU_wGVdCpRnoiD/exec"

    data = {
        name: document.getElementById("name").value.toString(),
        url: document.getElementById("url").value.toString(),
        desc: document.getElementById("desc").value.toString(),
    };

    console.log(data);

    fetch(url, {
        method: "POST",
        mode: "no-cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json"
        },
        redirect: "follow",
        body: JSON.stringify(data)
    }).then(e => {
        document.getElementById("name").value = "";
        document.getElementById("url").value = "";
        document.getElementById("desc").value = "";
    })
}