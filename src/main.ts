import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SpelunkerModule } from "nestjs-spelunker";
import { INestApplication } from "@nestjs/common";

const generateDepdenciesGraph = (app: INestApplication) => {
  const tree = SpelunkerModule.explore(app);
  const root = SpelunkerModule.graph(tree);
  const edges = SpelunkerModule.findGraphEdges(root);
  let graph = "graph LR";
  const mermaidEdges = edges.map(
    ({ from, to }) => `  ${from.module.name}-->${to.module.name}`,
  );
  graph += mermaidEdges.join("\n");
  return graph;
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(generateDepdenciesGraph(app));
  //await app.listen(process.env.PORT ?? 3000);
  
}
bootstrap();

console.log(process.env.DATABASE_USER, process.env.DATABASE_NAME);
