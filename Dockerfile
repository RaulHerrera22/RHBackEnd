FROM alpine:3.16
MAINTAINER RH-app
COPY target/RH-0.0.1-SNAPSHOT.jar RH-backSpring-app.jar
ENTRYPOINT ["java","-jar","/RH-backSpring-app.jar"]

