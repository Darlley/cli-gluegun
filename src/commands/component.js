module.exports = {
  name: 'generate:component',
  description: 'Create new Component inside srccomponents',
  alias: ['gc'],
  run: async (toolbox) => {
    const {
      parameters,
      template,
      print: { success, error }
    } = toolbox

    const name = parameters.first

    if(!name){
      return error('Component name must be specified')
    }

    await template.generate({
      template: 'component.js.ejs',
      target: `src/components/${name}/index.js`,
      props: { name: name }
    })

    success(`Generated ${name} component 🎉`)
  }
}
