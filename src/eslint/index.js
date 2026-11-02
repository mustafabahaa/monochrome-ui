import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const declarationFiles = ['mui.d.ts', 'mui-ui-roles.d.ts', 'mui-component-roles.d.ts'];

const readCustomVariants = (interfaceName) => {
  const variants = new Set();
  for (const filename of declarationFiles) {
    const source = fs.readFileSync(path.join(packageRoot, filename), 'utf8');
    const declarations = new RegExp(`interface\\s+${interfaceName}\\s*\\{([^}]*)\\}`, 'g');
    for (const match of source.matchAll(declarations)) {
      for (const property of match[1].matchAll(/^\s*([A-Za-z_$][\w$]*)\s*\??\s*:/gm)) {
        variants.add(property[1]);
      }
    }
  }
  return variants;
};

const variantsByComponent = {
  Typography: new Set([
    'inherit', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline',
    ...readCustomVariants('TypographyPropsVariantOverrides'),
  ]),
  Paper: new Set(['elevation', 'outlined', ...readCustomVariants('PaperPropsVariantOverrides')]),
  Button: new Set(['text', 'outlined', 'contained', ...readCustomVariants('ButtonPropsVariantOverrides')]),
  Chip: new Set(['filled', 'outlined', ...readCustomVariants('ChipPropsVariantOverrides')]),
  Avatar: new Set(['circular', 'rounded', 'square', ...readCustomVariants('AvatarPropsVariantOverrides')]),
  Skeleton: new Set(['text', 'circular', 'rectangular', 'rounded', ...readCustomVariants('SkeletonPropsVariantOverrides')]),
  LinearProgress: new Set(['determinate', 'indeterminate', 'buffer', 'query']),
  CircularProgress: new Set(['determinate', 'indeterminate']),
  TextField: new Set(['outlined', 'filled', 'standard']),
  Select: new Set(['outlined', 'filled', 'standard']),
};

const normalize = (value) => value.replaceAll('\\', '/');

const designSystemRules = {
  'known-variants': {
    meta: {
      type: 'problem',
      docs: { description: 'Reject component variants that are not provided by Monochrome UI.' },
      schema: [],
      messages: {
        unknownVariant: "'{{variant}}' is not a {{component}} variant provided by @monochrome-ui/design-system.",
      },
    },
    create(context) {
      const importedComponents = new Map();
      const componentForName = (name) => importedComponents.get(name) ?? name;
      const reportValue = (node, component, value) => {
        const allowed = variantsByComponent[component];
        if (allowed && !allowed.has(value)) {
          context.report({ node, messageId: 'unknownVariant', data: { component, variant: value } });
        }
      };
      const inspectExpression = (node, component) => {
        if (!node) return;
        if (node.type === 'Literal' && typeof node.value === 'string') {
          reportValue(node, component, node.value);
        } else if (node.type === 'TemplateLiteral' && node.expressions.length === 0) {
          reportValue(node, component, node.quasis[0]?.value.cooked ?? '');
        } else if (node.type === 'ConditionalExpression') {
          inspectExpression(node.consequent, component);
          inspectExpression(node.alternate, component);
        } else if (node.type === 'LogicalExpression') {
          inspectExpression(node.left, component);
          inspectExpression(node.right, component);
        } else if (node.type === 'ArrayExpression') {
          node.elements.forEach((element) => inspectExpression(element, component));
        }
      };

      return {
        ImportDeclaration(node) {
          if (node.source.value !== '@monochrome-ui/design-system') return;
          for (const specifier of node.specifiers) {
            if (specifier.type === 'ImportSpecifier') {
              importedComponents.set(specifier.local.name, specifier.imported.name ?? specifier.imported.value);
            }
          }
        },
        JSXAttribute(node) {
          if (node.name.type !== 'JSXIdentifier' || node.name.name !== 'variant') return;
          const opening = node.parent;
          const componentName = opening?.name?.type === 'JSXIdentifier' ? componentForName(opening.name.name) : null;
          if (!componentName || !variantsByComponent[componentName]) return;
          if (node.value?.type === 'Literal' && typeof node.value.value === 'string') {
            reportValue(node.value, componentName, node.value.value);
          } else if (node.value?.type === 'JSXExpressionContainer') {
            inspectExpression(node.value.expression, componentName);
          }
        },
      };
    },
  },
  'routed-page-scaffold': {
    meta: {
      type: 'problem',
      docs: { description: 'Require every routed page to inherit the shared page scaffold from its app shell.' },
      schema: [{
        type: 'object',
        properties: {
          shell: { type: 'string' },
          pages: { type: 'array', items: { type: 'string' }, uniqueItems: true },
        },
        required: ['shell', 'pages'],
        additionalProperties: false,
      }],
      messages: {
        missingPageScaffold: 'This routed page is not covered by PageScaffold from @monochrome-ui/design-system in the configured app shell.',
      },
    },
    create(context) {
      const configuredPages = new Set((context.options[0]?.pages ?? []).map(normalize));
      const relativeFilename = normalize(path.relative(context.cwd, context.filename));
      if (!configuredPages.has(relativeFilename)) return {};
      const shellPath = path.resolve(context.cwd, context.options[0].shell);
      const shell = fs.readFileSync(shellPath, 'utf8');
      const scaffoldImport = /import\s*\{[^}]*\bPageScaffold\b[^}]*\}\s*from\s*['"]@monochrome-ui\/design-system['"]/.test(shell);
      const scaffoldUsage = /<PageScaffold\b/.test(shell);
      if (scaffoldImport && scaffoldUsage) return {};

      return {
        Program(node) {
          context.report({ node, messageId: 'missingPageScaffold' });
        },
      };
    },
  },
};

export default { rules: designSystemRules };
