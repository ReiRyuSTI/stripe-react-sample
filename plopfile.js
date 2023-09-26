export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'list',
        name: 'componentType',
        message: 'Component type',
        choices: ['modules', 'pages', 'layout'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
      },
    ],
    actions: function (data) {
      const componentName = data.name;
      const componentType = data.componentType;

      if (componentType == 'layout') {
        return [
          {
            type: 'add',
            path: 'src/components/layout/{{name}}.tsx',
            templateFile: 'plop-templates/layout-component.tsx.hbs',
          },
        ];
      }
      if (componentType == 'pages') {
        return [
          {
            type: 'add',
            path: 'src/components/pages/{{name}}.tsx',
            templateFile: 'plop-templates/page-component.tsx.hbs',
          },
        ];
      }

      const componentPath = `src/components/${componentType}/${componentName}/`;
      return [
        {
          type: 'add',
          path: componentPath + '{{name}}.tsx',
          templateFile: 'plop-templates/component.tsx.hbs',
        },
        {
          type: 'add',
          path: componentPath + '{{name}}.stories.tsx',
          templateFile: 'plop-templates/component.stories.tsx.hbs',
        },
      ];
    },
  });
}
