const video = document.getElementsByClassName(".video");
const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");
const linkDoVideo = video.src;

botaoTrailer.addEventListener("click", ()=>{
    modal.classList.add("aberto");
    video.setAttribute('src', linkDoVideo);
});

botaoFecharModal.addEventListener("click", ()=> {
    modal.classList.remove("aberto");
    video.setAttribute('src', "");
});
