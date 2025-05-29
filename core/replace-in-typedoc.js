let replace = require('replace')

replace({
    regex: '# @redocly/hookstate-core',
    replacement: "",
    paths: ['dist/typedoc.md'],
    recursive: false,
    silent: false,
})

//  'Ƭ [*][*]([A-Za-z0-9]+)[*][*]: [*](.*)[*]' 'Ƭ **$1**: *`$2`*' dist/typedoc.md && replace 'Ƭ [*][*]State[*][*]: [*](.*)[*]' 'Ƭ **State**: *[StateMixin](#interfacesstatemixinmd) & `S extends object` ? `{ readonly [K in keyof Required<S>]: State<S[K]> }` : [StateMethods](#interfacesstatemethodsmd)*' dist/typedoc.md && replace '[(]statemethods.md#\\[self\\][)]' '(#self)' dist/typedoc.md && replace '[(]statemixin.md#\\[self\\][)]' '(#self-1)' dist/typedoc.md && replace '[(]statemixindestroy.md#\\[self\\][)]' '(#self-2)' dist/typedoc.md && replace '# @redocly/hookstate-core' '' dist/typedoc.md && replace '<a name=\"readmemd\"/>' '\n---\nid: typedoc-hookstate-core\ntitle: API @redocly/hookstate-core\n---' dist/typedoc.md && replace '\n\n(---)' '$1' dist/typedoc.md && mv dist/typedoc.md ../docs/index/docs/typedoc-hookstate-core.md",

replace({
    regex: '></a>',
    replacement: "/>",
    paths: ['dist/typedoc.md'],
    recursive: false,
    silent: false,
})


replace({
    regex: '<a name="readmemd"/>',
    replacement: "\n---\nid: typedoc-hookstate-core\ntitle: API @redocly/hookstate-core\n---",
    paths: ['dist/typedoc.md'],
    recursive: false,
    silent: false,
})

replace({
    regex: '\n\n(---)',
    replacement: "$1",
    paths: ['dist/typedoc.md'],
    recursive: false,
    silent: false,
})

replace({
    regex: '[(][a-zA-Z_]+[.]md#',
    replacement: "(#",
    paths: ['dist/typedoc.md'],
    recursive: false,
    silent: false,
})
