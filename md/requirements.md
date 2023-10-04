# Active API Project

## Students are to use TWO EXTERNAL APIs:

### Option 1

- Three page minimum for the website **with at least two pages including API information**
- Wireframes for the Project
  -  Must be saved within the Github in a the folder labled wireframes (screen-shots are allowed)
- The '/'  for the server not the public should lead to an HTML displaying a readme on how to use the EXTERNAL API.
- (GETS, POSTS, DELETES...etc)
- requirements for the requests (params, formatting ..etc)
- Should Include a Link to the Original API website

### Option 2

ONE EXTERNAL and create ONE API for an industry of their choice using the Industry Standard Hierarchy:

- Three page minimum for the website **with at least two pages including API information**
- Wireframes for the Project
  -  Must be saved within the Github in a the folder labled wireframes (screen-shots are allowed)
- '/' should be the root for the server should lead to an HTML  displaying a readme on how to use the API.
- (GETS,POSTS,DELETES...etc)
- requirements for the requests (params, formatting ..etc)
- You must also include a JSON full of no less that 20 products for the store
- Schema ItemMinimum Requirements: name-string, price-number, - featured-boolean, rating-number, createdAt-date, company-string, model...etc
- MUST HAVE AT LEAST ONE ENUM IMPLEMENTATION
- Example: enum: {      values: ['ikea', 'liddy', 'caressa', 'marcos'],      message: '{VALUE} is not supported',    },
- CREATE a file called populate.js that will load all of the json products into MongoDB database using
 
```javascript
await connectDB(process.env.MONGO_URI)

    await Product.deleteMany()

    await Product.create(jsonProducts)

    console.log('Success!!!!')

    process.exit(0)
```
 

Middleware :
-->Error-Handler: that acts as a buffer to report errors and continue on to ANY other middleware
-->NotFound: returns status of 404 and message of none existing route
--> User Login System with favorited items tracked for each user

 

Extra credit:

Create an encrypted User and Password system for your store using Bcrypt
Create a shopping system including a fake cart for check-out. 
must include minified image and product detail
active delete and update number of items to include total on the bottom of the page including AZ Tax
 

Deliverables:

Githubs Links