# next-blog-template

```s
# .env 파일

NEXT_PUBLIC_GOOGLE_ANALYTICS=구글 ANALYTICS
NEXT_PUBLIC_HOME_URL=https://dryadsoft.github.io/next-blog-template  => 실제 서비스할 블로그 URL 주소
NEXT_POST_ROOT_PATH=posts  => 포스팅할 마크다운 파일이 들어있는 경로
NEXT_SITE_MAP_DIR=./public/sitemap => SITEMAP 파일이 생성될 경로
NEXT_GITHUB_REPO=dryadsoft/next-blog-template => utterances 댓글을 사용하기위하여 owner/repository 입력
```

> 포스팅파일(마크다운파일)은 .env 파일에서 설정한 NEXT_POST_ROOT_PATH 경로에 생성한다.

```s
# sitemap 파일 생성전 sitemap 폴더 생성(최초 1번만 실행하면됨)
$ mkdir public/sitemap

# sitemap 파일 생성
$ yarn sitemap
```

### 댓글기능 utteranc 를 적용하기위한 주의사항

> 메타태그중 canonical의 페이지 URL이 정확하게 들어가 있어야 utteranc에서 github로 로그인시
> redirect 오류가 발생하지 않는다.

```html
<link rel="canonical" href="https://....." />
```

## google search console 등록

[구글 서치 콘솔](https://search.google.com/search-console/welcome?hl=ko)

## 네이버 search advisor emdfhr

[](https://searchadvisor.naver.com/)

> **[개발환경설정 바로가기](https://github.com/dryadsoft/next-blog-template/blob/master/개발환경설정.md)**
