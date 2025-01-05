const express = require('express');
const SwaggerParser = require('@apidevtools/swagger-parser');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const app = express();
const port = 3000;

const swaggerDocument = YAML.load(path.join(__dirname, 'openapi/openapi.yml'));

SwaggerParser.bundle(swaggerDocument, {
    resolve: {
        file: {
            basePath: path.join(__dirname, 'openapi') 
        }
    }
}).then((bundledSpec) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(bundledSpec));
});

app.get('/api/hello', (req, res) => {
    res.json({message: 'hello'});
});

app.listen(port, () => {
    console.log(`서버가 http://localhost:${port}에서 실행 중입니다.`);
});
