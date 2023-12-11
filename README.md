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

* ##Costos
* El costo total para ejecutar esta solución depende del número de pruebas de carga realizadas, la duración de esas pruebas de carga y la cantidad de datos utilizados como parte de las pruebas. Según esta revisión, el costo de ejecutar esta solución con la configuración predeterminada en la región Este de EE. UU. (N. Virginia) es de aproximadamente $30.90 por mes. La estimación de costos asume los siguientes factores:

* ![image](https://github.com/DaniV93/AYGO_AutomatedLoadTest_Project/assets/124316934/7543ecea-cafd-4ce0-8f94-c1ba904d8ef3)

* Es importante tener en cuenta que a partir de la versión 1.3.0, la CPU se incrementa a 2 vCPU y la memoria se incrementa a 4 GB. Estos cambios aumentan el costo estimado en comparación con las versiones anteriores de esta solución. Si tus pruebas de carga no requieren estos incrementos en tus recursos de AWS, puedes reducirlos.

# Seguridad

Este modelo compartido puede reducir tu carga operativa ya que AWS opera, gestiona y controla los componentes desde el sistema operativo del host y la capa de virtualización hasta la seguridad física de las instalaciones en las que operan los servicios. Para obtener más información sobre la seguridad en AWS, visita AWS Cloud Security.

## Roles de IAM

Los roles de AWS Identity and Access Management (IAM) permiten a los clientes asignar políticas de acceso granulares y permisos a servicios y usuarios en AWS. Esta solución crea varios roles de IAM, incluyendo roles que otorgan a la función AWS Lambda de la solución acceso a los otros servicios de AWS utilizados en esta solución.

## Amazon CloudFront

Esta solución despliega un sitio web estático alojado en un bucket de Amazon Simple Storage Service (Amazon S3). Para ayudar a reducir la latencia y mejorar la seguridad, esta solución incluye una distribución de Amazon CloudFront con una identidad de origen, que es un usuario especial de CloudFront que ayuda a proporcionar acceso seguro y público al contenido del bucket del sitio web de la solución. Para obtener más información, consulta Restringiendo el Acceso al Contenido de Amazon S3 Utilizando una Identidad de Origen.

## Grupo de seguridad de AWS Fargate

Por defecto, esta solución abre la regla de salida del grupo de seguridad de AWS Fargate al público. Si quieres bloquear a AWS Fargate para que no envíe tráfico a todas partes, entonces cambia la regla de salida a una Ruta de Inter-Dominio sin Clase (CIDR) específica. Este grupo de seguridad también incluye una regla de entrada que permite el tráfico local en el puerto 50,000 a cualquier fuente que pertenezca al mismo grupo de seguridad. Esto se utiliza para permitir que los contenedores se comuniquen entre sí.

## Prueba de estrés de red

Esta política cubre situaciones como si estás planeando ejecutar pruebas de red de alto volumen directamente desde tus instancias de Amazon EC2 a otros lugares como otras instancias de Amazon EC2, propiedades/servicios de AWS, o puntos finales externos. Estas pruebas a veces se llaman pruebas de estrés, pruebas de carga, o pruebas de día de juego. La mayoría de las pruebas de los clientes no caerán bajo esta política, sin embargo, consulta esta política si crees que estarás generando tráfico que se sostenga, en agregado, durante más de 1 minuto, sobre 1 Gbps (1 billón de bits por segundo) o sobre 1 Gpps (1 billón de paquetes por segundo).

## Restringiendo el acceso a la interfaz de usuario pública

Para restringir el acceso a la interfaz de usuario pública más allá de los mecanismos de autenticación y autorización proporcionados por IAM y Amazon Cognito, utiliza la solución de Automatizaciones de Seguridad de AWS WAF (firewall de aplicaciones web).

