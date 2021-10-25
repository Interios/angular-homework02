# AngularHomework02
ссылка на stackblitz https://stackblitz.com/edit/github-ccp1dw?file=src%2Fapp%2Fgamemanager%2Fgamemanager.component.ts

1) Explain everything you can see in the package.json and what it is the purpose of the file.

Он хранит список команд и пакетов с нужными версиями, необходимых для проекта. Можно назвать его репозиторием для хранения информации о проекте, информации о наборе инструментов которые будут использоваться в проекте. Это делает наш проект более динамичней для передачи его другому разработчику. Также уменьшает вес проекта, по скольку нам не нужно хранить модули вместе с проектом, все модули устанавливаются отдельно по команде "npm i" указаных в файле под свойствами "dependencies" и "devDependencies"

2) What is npm and how do we use that?

npm — это менеджер пакетов, входящий в состав Node.js. По сути это инструмент командной строки, которая помогает в установке и удалении пакетов, управлении версиями и зависимостями, необходимыми для запуска проекта.


3) What is the purpose of the assets folder, main.ts, angular.json, index.html

в index.html расположена главная вёрстка нашего проекта с основным тегом <app-root></app-root>
в main.ts расположено подключение нашего главного модуля AppModule, по сути он является точкой входа для загрузки нашего приложения как веб
angular.json как я понимаю - это файл настроек нашего ангуляр приложения

4) Give an example of smart and dumb components

Пример умного и тупого компонента реализовал в проекте. Вся логика помещена в умный компонент <GameManager>, а в тупом компоненте <GameActor> только вывод информации




This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
