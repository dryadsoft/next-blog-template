# next-blog-template

```s
# .env 파일

NEXT_PUBLIC_GOOGLE_ANALYTICS=구글 ANALYTICS
NEXT_PUBLIC_HOME_URL=https://dryadsoft.github.io/next-blog-template  => 실제 서비스할 블로그 URL 주소
NEXT_POST_ROOT_PATH=./src/post  => 포스팅할 마크다운 파일이 들어있는 경로
NEXT_SITE_MAP_DIR=./public/sitemap => SITEMAP 파일이 생성될 경로
```

> 포스팅파일(마트다운파일)은 .env 파일에서 설정한 NEXT_POST_ROOT_PATH 경로에 생성한다.

```s
# sitemap 파일 생성전 sitemap 폴더 생성(최초 1번만 실행하면됨)
$ mkdir public/sitemap

# sitemap 파일 생성
$ yarn sitemap
```

**[개발환경설정 바로가기](https://github.com/dryadsoft/next-blog-template/blob/master/개발환경설정.md)**
