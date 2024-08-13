function toggleMode() {
   const html = document.documentElement;
   html.classList.toggle("light");

   //pegar a tag img
   const img = document.querySelector("#profile img");

   //Substituir a imagem
   if (html.classList.contains("light")) {
    // Se tiver light mode,adicionar a imagme light
     img.setAttribute("src","./assets/avatar-light.jpg");
      img.setAttribute("alt", "./Foto da Princesa Tiana");
   } else {
    // Se tiver light mode,adicionar a imagem dark 
     img.setAttribute("src","./assets/avatar.webp");
   }
}

