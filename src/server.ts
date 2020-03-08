import express from 'express';

function main() {
  const app = express()

  var argv = process.argv.slice(2)
  var port = argv[0] ? argv[0] : 3000

  app.use(
    express.raw({
      type: "application/xml",
      limit: "1mb"
    }), 
    express.json())

  app.get('/health', (req, res) => res.sendStatus(204))

  process.on('SIGINT', () => {
    console.log("Caught interrupt signal");
    process.exit();
  });

  app.listen(port, () => console.log('api listening on port ' + port))
}

main();