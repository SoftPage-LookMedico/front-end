Scenario 1: Métodos de Pago
Given el médico esté apunto de pagar por su vestimenta
When vaya a la opción de “Pagar” 
Y le aparezca 3 formas: Tarjeta de Crédito, PayPal o Stripe
Then selecciona cualquiera de los 3 y puede guardar su método de pago.

Scenario 2: Registro de Pagos
Given el médico se encuentra en su perfil
When selecciona la opción de “Compras”
Then le muestra los métodos de pago más frecuentes que ha realizado.

Scenario 3: Cambiar método de pago
Given el médico está en su perfil
When vaya a la opción de “Métodos de pago” 
Y le aparezca 3 formas: Tarjeta de Crédito, PayPal o Stripe
Then selecciona, modifica o elimina el método de pago previamente guardado.
