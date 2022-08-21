import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function vazio(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    console.log('schematic >>> VAZIO SÓ PARA MOSTRA QUE EU TO FUNCIONANDO...');
    return tree;
  };
}
