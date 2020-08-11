# currencyfy
  This is a simple currency converter which basically helps in converting from one currency to another,

  Currencyfy supports few of the currencies listed by the
  [european central bank euro exhange reference rates](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html).

## Getting started

  Below are the instructions to get a copy of this project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```
  NodeJS, Docker, 
```

## Technologies

```
  ReactJS, Docker, Nginx web server, Azure, Azure-cli, docker-compose, Typescript

```

### Installing

  First, clone the app,

```
  RUN npm i
```

  Running the app, assuming you already have Docker installed on your system

```
  npm run docker
```
  Will build an image

```
  npm run currencyfy
```
  Will run the created image


## Deployment

  This app was deployed on azure, you may choose to deploy else where too.

  - You'll first have to push the image to any Registry of your choice [Azure container registry](https://azure.microsoft.com/en-us/services/container-registry/).

### Azure deployement procedure

  developing ...

## Authors

* **Frank Harerimana** - *Initial work* - [Frankhn](https://github.com/frankhn)

## License

  This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* European Central Bank