const webpack = require('webpack');
const DeclarationBundlerPlugin = require('declaration-bundler-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

var babelLoader = {
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    babelrc: true
  }
};

module.exports = ({ mode }) => {
  console.log(`Building in ${mode} mode...`)
  const isDevelopmentMode = mode === 'development'
  const transpileOnly = isDevelopmentMode;
  const devtool = isDevelopmentMode ? 'cheap-module-eval-source-map' : 'inline-source-map';
  const configFile = isDevelopmentMode ? 'tsconfig.json' : 'tsconfig.prod.json';

  return {
    mode,
    entry: './src/index.ts',
    output: {
      filename: "./index.js",
      library: 'ReactD3CirclePack',
      libraryTarget: 'umd',
      libraryExport: 'default',
      umdNamedDefine: true
    },
    module: {
      rules: [{
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          babelLoader,
          {
            loader: 'ts-loader',
            options: {
              transpileOnly,
              configFile
            }
          }
        ]
      }]
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new ForkTsCheckerWebpackPlugin(),
      new DeclarationBundlerPlugin({
            moduleName:'./src/pack/react-d3-circlpack.tsx',
            out:'./index.d.ts',
        }),
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    }
  }
}