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

## How to use mini-coi

  * the file **must be a local file**, you can't use any CDN or raw GitHub URL, you need to copy the file content locally [1]
  * the script *must not be a module*, it has to be exactly a `<script src="./mini-coi.js"></script>` at the top of your `<head>` tag in yout page (or in general before any other `script` or `link` or `style` is used, it can be after `meta` and `title` though)

[1] One way to grab the file and save it locally:

```sh
# grab mini-coi.js and save it locally as mini-coi.js
curl -LO https://raw.githubusercontent.com/WebReflection/mini-coi/main/mini-coi.js
```


### What's different from coi-serviceworker?

  * no options at all: "*it just works*" ™
  * always *require-corp* to have this working on Safari as well as Chrome or Firefox
  * 25 LOC in total, not much else happening
  * errors are just thrown in devtools
