FROM openjdk:11

COPY backend-0.0.1-SNAPSHOT.jar /src/app.jar

EXPOSE 2780

WORKDIR /src

ENTRYPOINT ["java", "-jar", "/src/app.jar"]