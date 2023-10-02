function enviarMensagemWhatsApp(mensagem) {
    // Número de telefone para o qual deseja enviar a mensagem (inclua o código do país, por exemplo, +55 para o Brasil)
    const numeroTelefone = '+5516982712949';
    
    // Crie o link do WhatsApp com o número de telefone e a mensagem
    const linkWhatsApp = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagem)}`;
  
    // Redirecione o usuário para o link do WhatsApp
    window.open(linkWhatsApp, '_blank');
}

const btnGas = document.getElementById('btn-gas');
const btnAgua = document.getElementById('btn-agua');
const btnWhatsapp = document.getElementById('icon-whatsapp');
const btnWhatsappFooter = document.getElementById('btn-whatsapp-footer');

function RedirectWhatsMsgGeneric(){
    enviarMensagemWhatsApp('Olá, estava em seu web site, e gostaria de obter algumas informações:');
};


btnWhatsapp.addEventListener("click", () => {
    RedirectWhatsMsgGeneric();
})

btnGas.addEventListener("click", () => {
    const mensagem = 
        'Olá, estou interessado no produto Gás GLP anunciado em seu web site. Por favor, me forneça mais informações.';
    enviarMensagemWhatsApp(mensagem);

}); 

btnAgua.addEventListener("click", () => {
    const mensagem = 
        'Olá, estou interessado no produto Água Mineral anunciado em seu web site. Por favor, me forneça mais informações.';
    enviarMensagemWhatsApp(mensagem);
});

