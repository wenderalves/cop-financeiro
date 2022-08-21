# Começando com o schematics

Instale o schematics-cli para criar novos schematics

```bash
  npm install -g @angular-devkit/schematics-cli
```

Para iniciar um novo schematic rode o comando abaixo ele cria um novo projeto de schematics ou adiciona um novo schematics
```bash
  schematics blank --name=Hello-World
```

Para compilar o schematics rode o comando
```bash
  npm run build
```

Depois de compilar para usar a gente precisa fazer o link local usando o npm link
```bash
  npm link
```

no projeto onde vamos usar o schematics deve ter o projeto que acabamos de gerar instalado
```bash
  npm link nome-do-projeto-schematic
```

Veja a documentação em
```bash
schematics --help
```
