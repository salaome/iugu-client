###IUGU CLIENT 
It is Iugu client to typescript projects.

###Install
```bash
npm i iugu-client
```

###Example
```js

const iugu = new Iugu("YOUR_APIKEY");

iugu.customer.create({
   email: "name@test.com",
   name: "user test"
})
.then((customer: Customer) => {
  //Do something
})
.catch((err:any) => {});
````

### Test
``
npm tst
``
