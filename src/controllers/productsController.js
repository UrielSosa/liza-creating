


module.exports = {
    index (req, res) {
        return res.send('productos');
    },
    show (req, res){
        return res.send('detalle');
    },
    update (req, res) {
        return res,send('actualizar');
    },
    store (req, res) {
        return res.send('guardado');
    }
}