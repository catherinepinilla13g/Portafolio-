document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  
  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      // Obtener valores del formulario
      const nombre = document.getElementById('nombre').value.trim();
      const correo = document.getElementById('correo').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();
      
      // Validación básica
      if (!nombre || !correo || !mensaje) {
        alert('Por favor completa todos los campos');
        return;
      }
      
      // Enviar a Telegram
      try {
        const botToken = ''; // Reemplaza con tu token
        const chatId = '';    // Reemplaza con tu chat ID
        
        const text = `📩 *Nuevo mensaje de contacto desde el portafolio*:\n\n` +
                     `*Nombre*: ${nombre}\n` +
                     `*Email*: ${correo}\n` +
                     `*Mensaje*: ${mensaje}`;
        
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
        
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: text,
            parse_mode: 'Markdown'
          })
        });
        
        if (response.ok) {
          alert('¡Mensaje enviado con éxito! Te responderé pronto.');
          form.reset();
        } else {
          throw new Error('Error al enviar');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Hubo un error. Por favor contáctame directamente a mi email.');
      }
    });
  }
});
