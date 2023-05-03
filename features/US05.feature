Gestión de Encargos 	
Como proveedor quiero saber el listado de encargos de cada cliente para poder organizarme en el envío de la vestimenta a su destino

Escenario 1: Lista de Encargos
Given el proveedor se encuentre en su perfil de empresa
When vaya a la opción Lista de Encargos
And le aparezca el nombre del médico, el producto con sus especificaciones y fecha estimada cuando finalice la elaboración  
Then el proveedor puede gestionar su tiempo de una mejor manera 

Escenario 2: Productos aproximados a la fecha de entrega
Given el proveedor se encuentra en su “Lista de Encargos”
When selecciona una compra
Then el proveedor puede ver la información de compra del cliente para poder enviarle el producto a la dirección registrada.  
