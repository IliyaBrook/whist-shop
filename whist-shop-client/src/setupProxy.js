module.exports = function(app) {
    app.use(
        createProxyMiddleware(["/api"], { target: "http://localhost:5000" })
    );
};