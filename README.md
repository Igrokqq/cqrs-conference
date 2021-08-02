# Cqrs API

### Steps to run API

#### Without Docker

-   nvm use
-   npm i
-   npm run start:dev

#### With Docker

-   docker volume create --name postgres_data -d local
-   docker volume create --name redis_data -d local
-   docker-compose build
-   docker-compose up -d

## Warning !

If you use docker you need to change ips in .env to container names

### [Api response format](https://github.com/Igrokqq/response-format) (replaced errors array to string in responses)

## Resources

-   https://jimmybogard.com/domain-command-patterns-validation/
-   https://stackoverflow.com/questions/32239353/command-validation-in-ddd-with-cqrs
-   https://github.com/dotnet-architecture/eShopOnContainers/wiki/Simplified-CQRS-and-DDD
-   https://abdelmajid-baco.medium.com/cqrs-pattern-with-c-a9aff05aae3f
-   https://dzone.com/articles/cqrs-and-event-sourcing-intro-for-developers
-   https://github.com/thenativeweb/wolkenkit
-   https://martinfowler.com/bliki/CQRS.html
-   https://coderoad.ru/47911625/%D0%9A%D0%B0%D0%BA-%D0%BF%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B8%D1%82%D1%8C-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-CQRS-Event-Sourcing-%D0%B2-Node-JS
-   https://coderoad.ru/47911625/%D0%9A%D0%B0%D0%BA-%D0%BF%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B8%D1%82%D1%8C-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-CQRS-Event-Sourcing-%D0%B2-Node-JS
-   https://github.com/AbdelmajidBa/CQRSPattern/blob/master/Infrastructure/Persistence/ApplicationContextInMemoryDB.cs
-   https://community.risingstack.com/integrating-legacy-and-cqrs-2/
-   https://enterprisecraftsmanship.com/posts/types-of-cqrs/
-   https://www.youtube.com/watch?v=icyvKTuZkzE
-   https://www.codinghelmet.com/articles/how-to-organize-repository-interfaces-to-support-cqrs-architecture
-   https://enterprisecraftsmanship.com/posts/validate-commands-cqrs/
-   https://stackoverflow.com/questions/43433318/cqrs-command-return-values
-   https://danielwhittaker.me/2016/04/20/how-to-validate-commands-in-a-cqrs-application/
-   https://vladikk.com/2017/03/20/tackling-complexity-in-cqrs/
-   https://stackoverflow.com/questions/32239353/command-validation-in-ddd-with-cqrs

<span style="font-size: 28px">Enjoy ;D</span>
