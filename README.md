# **_This is a React Web App_**

## **_About This App_**

This App is similar to blogging website. We can add or remove blogs from this website or app

## **_How to Run This App on Localhost_**

Navigate to project directory and run given command in terminal

```
$ npm i
$ npm start
```

This will start a development server on [http://localhost:3000](http://localhost:3000)

### **_Running Backend Server_**

I have connect this web app to **JSON-SERVER**
to start this server on localhost
First
given command should be executed before running this web app on localhost, navigate to project directory, then navigate to data directory, open terminal and execute thi command.

```
$ npx json-server --watch db.json --port 8000
```

If json-server doesn't start then run this command in terminal

```
$ npm install -g json-server
```

Then run this command again

```
$ npx json-server --watch db.json --port 8000
```

OR

```
$ npx json-server --watch data/db.json --port 8000
```

## **_About Developer_**

Creator of this app is **_Zain Ul Abidin_** frontend web engineer.
