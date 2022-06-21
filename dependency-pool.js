const dependencyPool = {
  entryPoint: './index.js',
  dependencies: {
    fs: [],
    module: [],
    path: [],
    './build-dependency-tree.js': [],
    './clean-up-dependency-pool.js': [],
    './folder_1_level_deep/folder_2_level_deep/module.js': [
      './folder/module.js'
    ],
    './folder/module.js': [],
    './get-dependencies.js': [
      './get-module-code.js',
      './get-required-paths.js',
      './remove-comments.js',
      './resolve-dependency-path.js',
      'module',
      'path'
    ],
    './get-dependency-pool.js': [
      './get-dependencies.js',
      './recur.js'
    ],
    './get-module-code.js': [
      'fs'
    ],
    './get-required-paths.js': [],
    './index.js': [
      './build-dependency-tree.js',
      './clean-up-dependency-pool.js',
      './folder_1_level_deep/folder_2_level_deep/module.js',
      './get-dependency-pool.js',
      './json-to-js.js',
      './save-dependency-pool.js',
      './sort-dependency-pool.js',
      'path'
    ],
    './json-to-js.js': [],
    './recur.js': [],
    './remove-comments.js': [],
    './resolve-dependency-path.js': [
      'module',
      'path'
    ],
    './save-dependency-pool.js': [
      'fs'
    ],
    './sort-dependency-pool.js': [
      './sort-object-keys.js'
    ],
    './sort-object-keys.js': []
  }
}