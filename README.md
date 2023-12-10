# AYGO_AutomatedLoadTest_Project

## Problemática

En el contexto de una empresa colombiana de desarrollo de software, abordamos desafíos clave relacionados con el rendimiento y la escalabilidad de las APIs REST, que son cada vez más complejas. Por lo anterior es fundamental para la empresa en cuestión garantizar la calidad y cumplir con las exigencias de sus clientes. Al ser estos los objetivos principales de la empresa, surgen las siguientes necesidades:

1. **Identificación de Cuellos de Botella:**
   Evaluar el rendimiento bajo cargas intensivas para la identificación de cuellos de botella, permite abordar problemas antes de que afecten a los usuarios reales.

2. **Validación de la Resistencia:**
   Al evaluar la resistencia bajo cargas sostenidas se puede asegurar un rendimiento confiable y adecuado en condiciones de uso continuo.

3. **Validación de Escalabilidad:**
   Evaluar la capacidad de la aplicación permite escalar horizontalmente y determinar si los recursos de la nube son capaces de manejar eficientemente un aumento en la carga de trabajo.

4. **Optimización de Recursos y Costos:**
    La identificación de los recursos óptimos para la carga prevista permite optimizar la infraestructura y reducir costos operativos evitando sobre o sub-aprovisionamiento.

5. **Monitoreo y Diagnóstico en Tiempo Real:**
    Monitorear en tiempo real las pruebas de carga distribuidas, identifica problemas de rendimiento proactivamente, permitiendo hacer correcciones eficientes.​

## Solución

Bajo este contexto, la implementación de pruebas de carga distribuidas en AWS se presenta como una solución estratégica. Al simular condiciones del mundo real, estas pruebas permiten evaluar el rendimiento bajo cargas significativas, mejorando así la robustez de las aplicaciones y asegurando que las soluciones evolucionen de manera efectiva con los requisitos cambiantes. Este enfoque no solo respalda la reputación de la empresa, sino que también fortalece su competitividad en el dinámico mercado del desarrollo de software.

En cuanto a los beneficios específicos, la implementación incluye la prueba de capacidades de carga mediante contenedores independientes de Amazon ECS en AWS Fargate. Además, ofrece la automatización de pruebas de carga al programar su inicio de forma automática en fechas específicas o recurrentes. La posibilidad de probar aplicaciones personalizadas mediante la creación de scripts personalizados de JMeter y visualizar datos en tiempo real a través de la consola web de la solución, que incluye una opción para ver datos en vivo durante una prueba en ejecución, contribuye significativamente a la eficiencia y efectividad del proceso de pruebas.

## Arquitectura
  ![Diagrama de flujo de la arquitectura de Pruebas de carga distribuidas en AWS](/img/diagramaArquitectura.jpg "Diagrama de flujo de la arquitectura de Pruebas de carga distribuidas en AWS")

La arquitectura implementa los siguientes recursos:
1. Una API de prueba de carga distribuida, que aprovecha **Amazon API Gateway** para invocar los microservicios de la solución (funciones de **AWS Lambda**).
2. Los microservicios proporcionan la lógica empresarial para gestionar los datos de prueba y ejecutar las pruebas.
3. Estos microservicios interactúan con **Amazon Simple Storage Service (Amazon S3)**, **Amazon DynamoDB** y **AWS Step Functions** para proporcionar almacenamiento para los detalles y resultados del escenario de prueba y ejecutar escenarios de prueba.
4. Se implementa una topología de red de **Amazon Virtual Private Cloud (Amazon VPC)** que contiene los contenedores de **Amazon Elastic Container Service (Amazon ECS)** de la solución que se ejecutan en **AWS Fargate**.
5. Los contenedores incluyen la imagen de contenedor compatible con **Open Container Initiative (OCI)** de prueba de carga de **Taurus (marco de automatización de pruebas de código abierto)** que se utiliza para generar carga para probar el rendimiento de su aplicación. La imagen del contenedor está alojada en AWS en un repositorio público de **Amazon Elastic Container Registry (Amazon ECR)**.
6. Se implementa una consola web con tecnología de **AWS Amplify** en un depósito de Amazon S3 configurado para alojamiento web estático.
7. **Amazon CloudFront** proporciona acceso público seguro al contenido del depósito del sitio web de la solución.
8. Durante la configuración inicial, esta solución también crea una **función de administrador de solución predeterminada (rol IAM)** y envía una invitación de acceso a una dirección de correo electrónico de usuario especificada por el cliente.
9. Un grupo de usuarios de **Amazon Cognito** administra el acceso de los usuarios a la consola y a la API del probador de carga distribuida.
10. Después de implementar esta solución, puede utilizar la consola web para crear un escenario de prueba que defina una serie de tareas.
11. Los microservicios utilizan este escenario de prueba para ejecutar Amazon ECS en tareas de AWS Fargate en las regiones especificadas.
12. Además de almacenar los resultados en Amazon S3 y DynamoDB, una vez que se completa la prueba, el resultado se registra en **Amazon CloudWatch**.
13. Si selecciona la opción de datos en vivo, la solución envía los registros de Amazon CloudWatch para las tareas de AWS Fargate a una función Lambda durante la prueba, para cada región en la que se ejecutó la prueba.
14. Luego, la función Lambda publica los datos en el tema correspondiente en **AWS IoT Core** en la región donde se implementó la pila principal. La consola web se suscribe al tema y podrá ver los datos mientras se ejecuta la prueba en la consola web.

## Demo

* [Creación Prueba​](/img/DemoCreación.mp4 "Creación Prueba​")
* [Ejecución Prueba​​](/img/DemoEjecución.mp4 "Ejecución Prueba​")