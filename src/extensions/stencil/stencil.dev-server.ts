// import { Config } from '@stencil/core';
// import { createCompiler } from '@stencil/core/compiler';
// import { DevServer } from '../bundler';
// import { Workspace } from '../workspace';

// export class StencilDevServer implements DevServer {
//   constructor(
//     readonly config: Config,

//     private workspace: Workspace
//   ) {}

//   async listen(port: number) {
//     const stencilCompiler = await createCompiler({
//       devServer: {
//         reloadStrategy: 'pageReload',
//         port: 4444,
//         basePath: this.workspace.path
//       },
//       outputTargets: [
//         {
//           type: 'dist'
//         },
//         {
//           type: 'www'
//         }
//       ],
//       namespace: 'test',
//       tsconfig: require.resolve('./typescript/tsconfig'),
//       taskQueue: 'async',
//       // cwd: this.workspace.path,
//       srcDir: this.workspace.path + '/web-components'
//       // includeSrc: [this.workspace.path + '']
//     });
//     // const watcher = await stencilCompiler.createWatcher();
//     // const watcherClose = await watcher.start();

//     return {
//       listen: () => {}
//     };
//   }
// }
