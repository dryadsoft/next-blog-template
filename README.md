# next-blog-template

```s
# .env 파일 생성
# Google KEY
NEXT_PUBLIC_GOOGLE_ANALYTICS=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS=cub-xx-xxxxxx
NEXT_GOOGLE_MAP_API_LOCAL_KEY=
NEXT_GOOGLE_MAP_API_PRODUCT_KEY=
# Github KEY
NEXT_PUBLIC_HOME_URL= # 실제 서비스할 gh-pages 블로그 URL
NEXT_GITHUB_REPO= # utterances 댓글을 사용하기위하여 owner/repository 입력(각자 계정에 맞는걸로 수정할것!)
# Naver
NEXT_NAVER_SITE_VERIFICATION=
# Defaul
NEXT_SITE_MAP_DIR=./public/sitemap # SITEMAP 파일이 생성될 경로(수정하지 말것!)
NEXT_POST_ROOT_PATH=posts # 포스팅할 마크다운 파일이 들어있는 경로(수정하지 말것!)
```

> 포스팅파일(마크다운파일)은 .env 파일에서 설정한 NEXT_POST_ROOT_PATH 경로에 생성한다.

```s
# sitemap 파일 생성전 sitemap 폴더가 존재하지 않는다면 생성(최초 1번만 실행하면됨)
$ mkdir public/sitemap
```

## deploy & publish

```s
$ yarn deploy:publish
```

## 댓글기능 utteranc 를 적용하기위한 주의사항

> 메타태그중 canonical의 페이지 URL이 정확하게 들어가 있어야 utteranc에서 github로 로그인시
> redirect 오류가 발생하지 않는다.

```html
<link rel="canonical" href="https://....." />
```

## google search console 등록

[구글 서치 콘솔](https://search.google.com/search-console/welcome?hl=ko)

## 네이버 search advisor 등록

[네이버 서치 어드바이저](https://searchadvisor.naver.com/)

> **[개발환경설정 바로가기](https://github.com/dryadsoft/next-blog-template/blob/master/개발환경설정.md)**
