# ORM-ECommerce-Back-End

Building the back end for an e-commerce site by configuring a working Express.js API to use Sequelize to interact with a MySQL database.

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Table of contents

- [Description](#Description)
- [Video Link](#VideoLink)
- [Installation](#Installations)
- [Usage](#Usage)
- [Testing](#Testing)
- [Contributing](#Contributing)
- [Questions](#Questions)
- [License](#License)

## Description

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Associations

- `Product` belongs to `Category`, and `Category` has many `Product` models, as a category can have multiple products but a product can only belong to one category.

- `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models. Allow products to have multiple tags and tags to have many products by using the `ProductTag` through model.

## VideoLink

Ecommerce ORM setup :
https://drive.google.com/file/d/1MwNPSAkabt0It81PItKifRJLYxJpzOtc/view?usp=sharing

Ecommerce ORM Insomnia:
https://drive.google.com/file/d/1jSxY_M4BS91gig7xMAn0rFv4TF7UeVS_/view?usp=sharing

## Usage

create .env file and write the username,password and host details for your mysql2 connection.
run all the installations.
Go to mysql shell in your terminal, establish connection using "mysql -u root -p" command , provide the password.
Go into db folder using 'cd db'. Create the database named 'ets' ,then 'use ets' and then 'SOURCE schema.sql'.
Create data using 'SOURCE seeds.sql'
Come out of sql, go to the root folder and type 'node seeds/index.js' to seed the database.
Then run the command "node server.js" to start the server
Then go to Insomnia and test different routes.

## Installations

```md
npm install
npm install sequelize
npm install mysql2
npm install express --save
npm install dotenv
npm i eslint eslint-config-prettier eslint-plugin-prettier prettier --save-dev
In Package.json add (under script)"lint": "npx eslint \*_/_.js --quiet; exit 0"
```

## Testing

In Insomnia Core, test the GET routes for a single category, a single product, and a single tag.
In Insomnia Core,test the POST, PUT, and DELETE routes for categories, products, and tags.

## Contributing

Rajni Dua

## Questions

For any further questions, reachout to me at :

- Github: [rajnidua](https://github.com/rajnidua)
- Email: rajni.dua14@gmail.com

## License

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

&copy; 2021 Rajni Dua

_Licensed under [MIT](./license)_

## References

https://sequelize.org/master/manual/validations-and-constraints.html
