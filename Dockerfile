FROM alpine:3.17
MAINTAINER RH-app
COPY target/RH-0.0.1-SNAPSHOT.jar RH-app.jar
ENTRYPOINT ["java","-jar","/RH-app.jar"]

