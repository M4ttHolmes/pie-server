npm - Node Package Manager, can manage packages that are local dependencies of a particular project.

npm start - This command looks into the root directory of our project and looks for the scripts object. If it finds it, it will look for the matching keyword (in this case, "start") then runs the associated command script. 

npm dev - Indicates that we are running our project in development mode and that we are using "nodemon" to do that. Nodemon allows us to make changes to our server without having to restart it manually every time we make a change. 

node_modules - packages that npm installs that allow our application and all of its dependencies to run properly.

package-lock.json - Simply locks in the version of the packages that we're using in a specific project. We get this file so that anyone who clones our project and tries to run it will have the exact same versions of the packages that we use.

MVC - Model View Controller. 

Express - Framework used to help us organize our server into MVC architecture. 

ORM - Object Relational Mapper. Code library that automates the transfer of data in a database, into objects that are more commonly used in applications (like JSON).

Sequelize - an ORM JavaScript library that we'll use to manage our postreSQL databases. 

Models - How we shape the data that we'll be sending to our databases.

PG - a package that allows us to write in the dialect that sequelize needs to speak to our postgreSQL database.

PG hstore - a package that allows us to access more advanced and complex pieces of code regarding postgreSQL.

bcryptjs - Used to encrypt sensitive data, such as user passwords.

jwt - JsonWebToken, used to create web sessions, like when you're logged into your bank's website. 