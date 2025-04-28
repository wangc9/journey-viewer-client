## Description

This is the client section of a full-stack project visualising bicycle usage around the Helsinki Metropolitan Area. The data used for this project is owned by **City Bike Finland**. The [dataset](https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv) for the city bike stations is provided by [HSL](https://www.hsl.fi/en/hsl) under [this license](https://www.avoindata.fi/data/en/dataset/hsl-n-kaupunkipyoraasemat/resource/a23eef3a-cc40-4608-8aa2-c730d17e8902).

You can access the live version of this project [here](https://journey-viewer-client.vercel.app/en).

## Project setup

This project has been developed and tested under Node.js 22.

For the client setup, use the following command:

```bash
yarn install
```

## Compile and run the project

Before starting the client, make sure that the server is up and running. You can find the server repository along with its setup instructions [here](https://github.com/wangc9/journey-viewer-server).

After you have successfully configured the server, you can start the client by running the following command:

```bash
# development
$ yarn run dev
```

Once both the server and the client are spinning successfully, you can access the website through [http://localhost:3001](http://localhost:3001)

## Stay in touch

- Author - [Chen Wang](https://www.linkedin.com/in/msc-chen-wang/)

## License

This project uses Next, which is [MIT licensed](https://github.com/vercel/next.js/blob/canary/license.md).
