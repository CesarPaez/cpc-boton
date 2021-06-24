const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = (env, argv) => {
    return {
        entry: {
            main: "./src/index.js",
        },
        output: {
            path: path.resolve(__dirname, "./dist"),
            filename: "[name].bundle.js"
        },
        target: "web", // needed or live reload fails
        devtool: argv.mode === "production" ? "cheap-source-map" : "inline-source-map",
        devServer: {
            contentBase: "dist",
            publicPath: "/",
            open: true,
            hot: false,
            liveReload: true,
            historyApiFallback: true, // SPA
        },
        module: {
            rules: [{
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                        },
                    },
                },
                {
                    test: /\.html$/i,
                    use: ["raw-loader"],
                },
                /*  {
                    test: /icons\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },    */

                {
                    test: /\.css$/i,
                    use: ["raw-loader"],
                },


                /*  {
                     //test: /\.(jpg|jpeg|png|svg|ico|eot|ijmap|ttf|woff|woff2)$/,
                     test: /\.(eot|ijmap|ttf|woff|woff2)$/,
                     use: {
                         loader: 'url-loader'
                     }
                 } */

                /*   {
                    test: /\.(svg|eot|woff|ttf|svg|woff2)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: "[path][name].[ext]"
                        }
                    }]
                }
 */
            ],
        },
        plugins: [
            // new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/index.html", // template file
                filename: "index.html" // output file                
            }),
            new CopyPlugin({
                patterns: [                    
                    { from: "src/styles.css", to: "styles.css" },                                        
                    {
                        from: "node_modules/material-design-icons/iconfont/*.*",
                        to({ context, absoluteFilename }) {
                            return "material-design-icons/iconfont/[name][ext]";
                        }

                    },
                ],
            }),

        ],
        optimization: {
            minimize: argv.mode === "production",
        },
    }
}