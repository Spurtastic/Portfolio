# CreditCardProject

## application.properties config
The file is in .gitignore so developers can work on their own local databases. Template:

```
server.port=9001
### MYSQL DATABASE ###
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/**INSERT SCHEMA**
spring.datasource.username=root
spring.datasource.password=**INSERT PASSWORD**
spring.jpa.database=mysql
spring.sql.init.mode=always
spring.resources.add-mappings=true
# for the application logging
logging.level.hibernate=warn
logging.level.org.springframework.web=info
#format of the log output
logging.pattern.file=%d{yyyy-MM-dd HH:mm:ss} [%-5level] --- [%thread] %logger{36}.%M - %msg%n
logging.file.name=./logs/fdm.log
spring.jpa.hibernate.ddl-auto=update
#spring.jpa.hibernate.ddl-auto=create-drop
```
## 

