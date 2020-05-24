# eos-gate

Microservice for interacting with blockchain 

# Dependencies

* express
* eosjs
* dotenv
* node-fetch
* fetch
* @sentry/nodу

# Environment variables

* PORT
* SENTRY_DSN
* EOS_URI 
* CONTRACT_ACCOUNT
* PRV_KEY

# Running

```
npm start
```

# Examples

```
POST /form

{
   "form":"testname",
   "questions":[
      "This is test question"
   ]
}
```

```
DELETE /form

{
   "form":"testname",
}
```

```
POST /response

{
   "form":"testname",
   "answers":[
      "This is test answer"
   ]
}
```


curl --header "Content-Type: application/json" \
  --request POST
  --data '{"form": "tocds1zyedzc","questions": ["What's up?"]}' \
  http://localhost:8080/form


  {"form": "tocds1zyedzc","questions": ["What's up?"]}