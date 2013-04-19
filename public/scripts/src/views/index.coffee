client.views.index = Backbone.View.extend(
  build: (data) ->
    ['#page-index', [
      ['.container-narrow', [
        ['.masthead', [
          ['h3 a.muted', {href: '/'}, 'Project Name']
        ]]
        ['hr']
        ['.jumbotron', [
          ['h1', 'This project is going to be so awesome!']
          ['p.lead', 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.']
        ]]
        ['hr']
        ['.row-fluid.marketing', [
          ['.span6', [
            ['h4', 'Subheading']
            ['p', 'Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.']
            ['h4', 'Subheading']
            ['p', 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.']
            ['h4', 'Subheading']
            ['p', 'Maecenas sed diam eget risus varius blandit sit amet non magna.']
          ]]
          ['.span6', [
            ['h4', 'Subheading']
            ['p', 'Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.']
            ['h4', 'Subheading']
            ['p', 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.']
            ['h4', 'Subheading']
            ['p', 'Maecenas sed diam eget risus varius blandit sit amet non magna.']
          ]]
        ]]
        ['hr']
        ['.footer', [
          ['p', { html: true }, '&copy; Project Name']
        ]]
      ]]
    ]]
  )