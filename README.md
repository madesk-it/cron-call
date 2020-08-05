# cron-call
Tool to call a URL (or more) at a specific time.

### Configuration
Copy `schedule.json.tpl` to `schedule.json` and set your jobs.
##### Cron format
```
*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)
```


### Start the cron
##### Using docker
```
docker run \
  -dit \
  --restart=always \
  --name my-cron-call \
  --mount type=bind,source=/path/to/host/data/,target=/app/data \
  madesk/cron-call
```
Replace `/path/to/host/data/` with absolute path to your data folder (containing `schedule.json`).
##### Using source
```
npm install && npm start
```