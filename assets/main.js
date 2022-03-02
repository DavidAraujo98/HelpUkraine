function loadEntries() {
    var myModal = new bootstrap.Modal(document.getElementById('welcome'), {
        keyboard: false
    });
    var modalToggle = document.getElementById('toggleMyModal') // relatedTarget
    myModal.show(modalToggle)
}