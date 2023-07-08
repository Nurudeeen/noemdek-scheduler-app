# noemdek-schedule-api

a [Sails v1](https://sailsjs.com) application


### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [cyclic server base url: https://wild-pear-camel-wear.cyclic.app](https://wild-pear-camel-wear.cyclic.app)
+ [local server base url: http://localhost:1337/](http://localhost:1337/)



### App overview and functions

This app was originally generated on Wed Jul 05 2023 18:55:41 GMT+0100 (West Africa Standard Time) using Sails v1.5.3.

Admin can do the following:

+ Add vehicles and drivers
+ Create schedule [{{base_url}}/add-schedule]
+ View schedules based on vehicle or driver category and based on date ranges [{{base_url}}/fetch-schedules]
+ View individual schedules [{{base_url}}/view-schedule]
+ Edit schedule [{{base_url}}/edit-schedule]
+ Delete schedule [{{base_url}}/delete-schedule]

This app was developed using Sails JS and Node, Mongodb is used to store data accessed by Sails Waterline ORM.

MongoDB was chosen as the database of choice because of the ease of implementation and integration with Sails framework through the Waterline ORM.

### How to install
To run the app, install sails js and run the following command in the terminal:


`npm install`
`npm run dev` 


