<h1 align="center">@partivo/template</h1>
Soon

## Example Code
JavaScript File
```js
import Template from '@partivo/template';
const template = new Template('/usr/local/bin/template'); // Folder Location
const page = template.renderFile('404', {
  hostname: "partivo.net"
}); // 404.html
```

HTML File
```html
<html>
    <head>
        <title>404 Not Found</title>
    </head>
    <body>
        <center><h1>404 Not Found</h1></center>
        <hr>
        <center>{{ replace-hostname }}</center>
    </body>
</html>
```
