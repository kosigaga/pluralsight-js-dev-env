import path from 'path';

export default {
   debug: true,
   devtool: 'inline-source-map',
   noInfo: false,
   entry: [
      path.resolve(__dirname, 'src/index.js')
   ],
   target: 'web',
   output: {
      path: path.resolve(__dirname, 'src'),
      publicPath: '/',
      filename: 'bundle.js'
   },
   devServer:{
      contentBase: path.resolve(__dirname, 'src')
   },
   plugins: [],
   module: {
      loaders: [
         { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
         { test: /\.css$/, loaders: ['style-loader', 'css-loader'] }
      ]
   }
};
