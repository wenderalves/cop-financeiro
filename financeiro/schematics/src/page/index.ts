import { apply, Rule, url, template, mergeWith } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { Schema } from './schema';

export function page(_options: Schema): Rule {
  // return(tree: Tree, _context: SchematicContext)
  return () => {
    const sourceTemplates = url('./files'); // inclui a pasta de template

    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        ..._options,
        ...strings
      })
    ]);

    return mergeWith(sourceParametrizedTemplates);
  };
}
