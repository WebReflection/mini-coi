# mini-coi

A minimalistic *CLI* utility or a simplified version of [coi-serviceworker](https://github.com/gzuidhof/coi-serviceworker), with an optional `scope` attribute to define where Cross Origin Isolation should happen.

## CLI

Bootstrap a local server with all headers enforced:

```sh
npx mini-coi .

# the third argument is a path so ...
# npx mini-coi ./public/
# npx mini-coi ./test/
# ...
```

The *CLI* brings in what's possible already to do with [static-handler](https://github.com/WebReflection/static-handler/tree/main) by passing `--coi` by default.


## Service Worker

Allow headers in places like GitHub pages or any other server where you cannot change current headers:

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

#### What's different from coi-serviceworker?

  * no options at all: "*it just works*" ™
  * always *require-corp* to have this working on Safari as well as Chrome or Firefox
  * errors are just thrown in devtools

- - -

### How to use mini-coi as Service Worker

  * the file **must be a local file**, you can't use any CDN or raw GitHub URL, you need to copy the file content locally [^1]
  * the script *must not be a module*, it has to be exactly a `<script src="./mini-coi.js"></script>` at the top of your `<head>` tag in yout page (or in general before any other `script` or `link` or `style` is used, it can be after `meta` and `title` though)

[^1]: You can either use the *CLI* utility:

    ```sh
    npx mini-coi -sw public/mini-coi.js

    // or ...
    npx mini-coi --service-worker public/mini-coi.js
    ```

    Or you can grab the file from a CDN and save it locally:

    ```sh
    # grab mini-coi.js and save it locally as mini-coi.js
    curl -LO https://raw.githubusercontent.com/WebReflection/mini-coi/main/mini-coi.js
    ```
  