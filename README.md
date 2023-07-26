# mini-coi

A minimalistic version of [coi-serviceworker](https://github.com/gzuidhof/coi-serviceworker), with an optional `scope` attribute to define where Cross Origin Isolation should happen.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./mini-coi.js" scope="./"></script>
</head>
</html>
```

### What's Different?

  * no options at all: "*it just works*" ™
  * always *require-corp* to have this working on Safari as well as Chrome or Firefox
  * 30 LOC in total, not much else happening
  * errors are just thrown in devtools
