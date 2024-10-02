let share = document.getElementById("share")

let shareBox = document.getElementById('share-box')

share.addEventListener('click', function(){
    shareBox.classList.toggle('share-box')
    share.classList.toggle('bright')

})