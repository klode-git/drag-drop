const dropArea = document.getElementById('drop-area');
const inputFile = document.getElementById('input-file');
const imgDisplay = document.getElementById('img-display');

inputFile.addEventListener('change', uploadImage);

function uploadImage() {
  let imgLink = URL.createObjectURL(inputFile.files[0]);
  imgDisplay.style.backgroundImage = `url(${imgLink})`;
  imgDisplay.textContent = '';
  imgDisplay.style.border = 0;
}

dropArea.addEventListener('dragover', function(e) {
  e.preventDefault();
})

dropArea.addEventListener('drop', function(e){
  e.preventDefault();
  inputFile.files = e.dataTransfer.files;
  uploadImage();
})