hashed passwords cannot be required because we are using social login
run the command npx prisma db push (to push everything to the database)
now if you refresh your database, you will see new collections

go to github settings and enable developer settings, oauth apps , create a new oauth app ,
for now make the home url localhost:3000, and the same for authorization callback url

google "google developer console"
console.cloud.google.com
give a project name
click create, wait for a while for this project to complete, and click on select project, or you can search for your project your self at the left side where you must be in the newly created project and not an old one
search for api (click on enable api s and services)
click on oauth consent screen, click on external , and click create,
give the app name "maybe airbnb clone" , select your support email "wabisernprojects@gmail.com", fill the developer contact information, click on save and continue,
click on credentials and click on create credentials , oauth client id , application type "web application"
in authorized redirect uri s "http://localhost:300/api/auth/callback/google"
copy your client id and client secret

if your font is not loading, just delete the .next folder (next.js cache) and refresh / rebuild
