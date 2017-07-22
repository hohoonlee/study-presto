# study-presto
## centos 7에 설치하는 방법

* git 설치
> [root@client ~]# yum -y install git

* node.js verion관리를 위한 nvm 설치

> [hadoop@client ~]$ curl https://raw.githubusercontent.com/creationix/nvm/v0.25.0/install.sh | bash

> [hadoop@client ~]$ source ~/.bashrc

* node.js 설치

> [hadoop@client ~]$ nvm install v6.11.1

> [hadoop@client ~]$ node -v

* npm 최신 버전 upgrade

> [hadoop@client ~]$ npm install npm -g

> [hadoop@client ~]$ npm -v

> [hadoop@client ~]$ npm install yarn -g

* study-presto 프로그램을 설치

> [hadoop@client ~]$ git clone https://github.com/hohoonlee/study-presto.git

> [hadoop@client ~]$ cd study-presto

> [hadoop@client study-presto]$ yarn install

* study-presto 실행

> [hadoop@client study-presto]$ yarn start

* ui 접속

> 브라우져에서 http://client.hadoop.kr:3000으로 접속
