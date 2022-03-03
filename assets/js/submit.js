function sendData() {
    const url = "https://script.google.com/macros/s/AKfycbzriW940OQTroyyC4WbunLChdgTCogrf9QEMYAfRdddr2_OVuGjsCiU_wGVdCpRnoiD/exec"

    var name = document.getElementById("name").value.toString();
    var u = document.getElementById("url").value.toString();
    var desc = document.getElementById("desc").value.toString();

    if (!name || !isValidHttpUrl(u) || !desc) {
        Swal.fire({
            icon: 'error',
            title: "Please fill all fields",
            confirmButtonColor: '#0057b7',
        }).then(() => {
            return;
        });
        _clearInput();
    } else {
        data = {
            name: name,
            url: u,
            desc: desc,
        };

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
            Swal.fire({
                icon: 'success',
                title: "Your submission is complete !",
                text: "Thank you once again for your support.",
                confirmButtonColor: '#0057b7',
            });
            _clearInput();
        });  
    }
}

function _clearInput() {
    document.getElementById("name").value = "";
    document.getElementById("url").value = "";
    document.getElementById("desc").value = "";
}

function isValidHttpUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;  
  }
  return url.protocol === "http:" || url.protocol === "https:";
}