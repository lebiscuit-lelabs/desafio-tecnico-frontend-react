const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss'
  ],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src/`)

    config.module.rules.push(
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loaders: ['file-loader'],
        include: path.resolve(__dirname, 'src')
      }
    )

    return config
  }
}
