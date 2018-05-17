# Проект Курсовой. КПИ 2018

Очень простой GitHub API клиент

ВАЖНО! Ссылка на курсач: https://github.com/ottodranik/OP_kursa4

Для запуска курсового проекта необходимо:

## 1. Установить nvm
  #### 1.1. В командной строке выполнить команды:
  ```
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
  ```
  или
  ```
  wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
  ```
  На MACOS иногда требуется выполнить команду
  ```
  touch ~/.bash_profile
  ```
  если этот файл не создался автоматически

  #### 1.2. Переоткрыть терминал

  #### 1.3. Проверить версию nvm
  ```
  nvm --version
  ```

## 2. Через nvm установить nodejs
  ```
  nvm install 10.0.0
  ```
  ```
  node -v
  ```

#### Ссылка на развёрнутый гайд по установке nvm + node
https://gist.github.com/d2s/372b5943bce17b964a79

## 3. Через терминал зайти в папку с курсовым проектом и установить зависимости

  ```
  npm install
  ```

## 4. В папке с курсовым проектом и выполнить команду для запуска проекта

  ```
  npm run start
  ```

После этого в окне браузера откроется проект по дефолтному адресу http://localhost:3000