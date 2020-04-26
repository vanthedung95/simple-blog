# Simple blog

A simple restful api build with Nodejs and Express.

## How to use?

1. Download or clone this repo.

2. Install dependencies.

```js
npm install
```

3. Configure

You can change the options of your app from ```/src/config/index.js``` file 

4. Run project.

```js
npm run start
```

## Usage

### POST /profile/register

Request body

```
{
  "email": "foobar@gmail.com",
  "account_type": "google" // only google or facebook is accepted
}
```

Register new user with email and account type

### PUT /profile/[id]

Request body

```
{
  "fullname": "Foo Bar",
  "phone": "0987654321",
  "profession": "Student",
}
```
Update profile user before do something else

### POST /blog

Request body

```
{
  "user_id": 1,
  "title": "Nullam a nisl massa",
  "content": "Etiam placerat tellus et sapien aliquet lacinia. Suspendisse semper varius nisl, quis malesuada lectus faucibus sed. Morbi auctor efficitur dolor, nec blandit nunc tempor vitae. Nullam congue consectetur bibendum. Suspendisse non ultricies felis. Integer tincidunt quam sed odio euismod, at ullamcorper lectus condimentum. Phasellus at odio vel diam rhoncus sagittis in quis purus. Aliquam erat volutpat. Sed aliquam metus in est rhoncus commodo. Ut et odio a nisl facilisis euismod ut at mi. Sed ut diam elementum, imperdiet nunc at, scelerisque arcu. Morbi at neque mattis, posuere lectus ut, euismod sem. Suspendisse vitae dui at mi rhoncus feugiat."
}
```

Create new blog

### GET /blogs

Return all blogs of all users

### GET /blog-by-user?user_id=[user_id]
Get list blogs of one user

### GET /blog/[id]
Get detail one blog

## Project was created using [Express](http://expressjs.com/).

### Happy Coding
