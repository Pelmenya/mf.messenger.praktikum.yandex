# Проектная работа №3

##  Тема: "Разработка приложения Чат"

### Решены задачи:

##### Добавлен роутинг в проект:
- Реализован роутер для регистрации роутов согласно сигнатуре в уроках. 
- У всех страниц собственный роут.
- В DOM активна только одна страница (при переходе на новую страницу старая удаляется из DOM).
- При обновлении страницы с определённым URL отображается та же самая страница. 
- Реализованы переходы по страницам через нажатие на кнопки в интерфейсе приложения.  
- Реализованы переходы «назад» и «вперёд», как через интерфейс браузера, так и через роутер.
##### Подключен WebSocket для работы с real-time сообщениями. Реализован обмен текстовыми сообщениями между пользователями.
##### Написаны тесты для роутера, компонента, модуля отправки запросов. Используется Mocha и Chai.
##### Внедрены HTTP API чатов, авторизации и пользователей. Добавлена:
- Регистрация, авторизация, выход из системы);
- Работа с информацией пользователя (можно изменять данные пользователя, аватар, пароль);
- Работа с чатами (список чатов пользователя, создать новый чат, добавить пользователя в чат, удалить пользователя из чата).
##### Сборка проекта осуществляется при помощи Parcel.

### Описание проекта:
  Приложение предназначено для общения и обмена файлами

### Установка проекта:
 Для установки необходимо наличие Node.js и npm

Сохраните проект у себя на компьютере:
```
git clone `https://github.com/Pelmenya/mf.messenger.praktikum.yandex.git`
```
В корне проекта через консоль/терминал запустите команду:
```
npm install
```
Запустите в консоле команду для запуска сервера, необходимо для тестов:
```
npm run start
```
Запустите в консоле команду для компиляции js - модулей:
```
npm run build
```
Запустите в консоле команду для создания билда:
```
npm run dev
```
Приложение будет доступно по адресу "http://localhost:1234"
```
Длязапуска тестов используйте команду
```
npm run test
