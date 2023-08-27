function altaVehiculoService(data) {
  //validaciones:
  if (!data.modelo) {
    throw new Error("ingrese modelo");
  }
  if (!data.marca) {
    throw new Error("ingrese marca");
  }
  if (!data.anio) {
    throw new Error("ingrese año");
  }
  if (!data.cliente) {
    throw new Error("ingrese cliente");
  }
  if (isNaN(data.anio)) {
    throw new Error("año no es un número");
  }
  if (data.anio > 2025 || data.anio < 1970) {
    throw new Error("año inválido");
  }

  //lógica de ddbb:
  return "auto registrado.";
}

module.exports = { altaVehiculoService };
