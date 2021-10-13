const { Router } = require('express');
const router = Router();

router.post('/send-email', (req, res) => {
    const { nombre,email,numero,comentarios } = req.body;
    contentHTML = `
        <h1>Informacion de cliente</h1>
        <ul>
            <li>Nombre de empresa/local: ${nombre}</li>
            <li>Email: ${email}</li>
            <li>Numero de contacto: ${numero}</li>
        </ul>
        <p>Comentario ${comentarios}</p>
    `;
    
    console.log(contentHTML)

    res.send('recivido');
})

module.exports = router;