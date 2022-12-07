# Base 이미지
FROM node16.15.0-alpine3.12
# 빌드된 산출물을 실행시키기 위해 필요한 serve 모듈
RUN npm install -g serve
# 빌드된 산출물 도커 이미지로 복사
RUN mkdir .build
COPY .build .build
# 실행 명령어
ENTRYPOINT [serve, -l, 3000, -s, build]