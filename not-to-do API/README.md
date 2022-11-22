# RESTfull API for not to to list

This API is create for react not to do frontedn application, herer is the repo for the fornted `...`

## How to run

1.open your terminal at your development folder
2.Run `git clone ...`
3.Run `cd ...`
4.Run `git npm install` 5. Run `npm start`

Now your server is running at `https://localhost:8000`

## API details

This server applies the REST full principle to provide API
All the API will follow '<rooturl>/v1/<resources end point>'

## Task API

All the tasks related transaction of api will be request through '<rooturl>/v1/task'

| #   | PATH | METHOD | IS PRIVATE | DESCRIPTION                                                  |
| --- | ---- | ------ | ---------- | ------------------------------------------------------------ |
| 1.  | `/`  | Get    | No         | This endpoint will return all the task from database         |
| 1.  | `/`  | Post   | No         | Receive an object from the client and stores in the database |
| 1.  | `/`  | Put    | No         | Receives `_id` of specific object and the data to update     |
| 1.  | `/`  | Delete | No         | Receives `_id` and delete it from database                   |
