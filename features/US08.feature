Filtros de Vestimenta	Como médico quiero poder filtrar por talla, color y estilo para encontrar lo que necesito en cuestión de minutos.

Escenario 1: Filtros de Búsqueda
Given el médico quiera encontrar en cuestión de minutos su uniforme
When se encuentre en la sección “Market”
And se dirige al buscado, en el lado izquierdo tendrá un icono con el nombre de Filtros
Then el médico puede seleccionar los filtros para encontrar las preferencias de su prenda

Escenario 2: No aparecen los Filtros de Búsqueda
Given el médico quiera encontrar en cuestión de minutos su uniforme
Cuando se encuentre en la sección “Market”
Y se dirige al buscado, en el lado izquierdo tendrá un icono con el nombre de Filtros
Entonces el médico no puede seleccionar los filtros para encontrar las preferencias de su prenda
Y le aparece un mensaje de error
