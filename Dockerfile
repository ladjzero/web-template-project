FROM cargo.caicloudprivatetest.com/library/nginx:1.12.2-alpine
COPY dist/ /usr/share/nginx/html/build
COPY dist/module-manifest.html /usr/share/nginx/html/api/x/module-manifest.html
