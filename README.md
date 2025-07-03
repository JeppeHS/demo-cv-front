# Demo CV application
For demonstration purposes

## Running locally
* `pnpm dev`

## Generate types from server
* `pnpm graphql-codegen`

## Generate types from local
* `$env:NODE_TLS_REJECT_UNAUTHORIZED=0; pnpm graphql-codegen`

## Create Dokku app
* SSH to server (locally)
  * ``ssh root@68.183.241.236``
* Create app (server)
  * ``dokku apps:create democvfront``
* Add domain (server)
  * ``dokku domains:add democvfront democvfront.celepus.com``
* Set Lets Encrypt email for APP (server)
  * ``dokku letsencrypt:set democvfront email jkh@haugaard-consult.com``
* Setup https (server)
	* ``dokku letsencrypt:enable democvfront``
* Add git remote (locally)
  * ``git remote add dokku dokku@68.183.241.236:democvfront``

## Deploy to Dokku app on Digital Ocean
* Deploy (locally)
  * ``git push dokku main:master``