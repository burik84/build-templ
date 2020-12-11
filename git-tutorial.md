# О GIT - свои мысли

Короткая шпаргалка для работы с git. Использую github.
Для начало - создать новый репозиторий на [github](https://github.com) и далее использовать кнопку `clone or download`.

## Git и GitHub Курс Для Новичков

Git и Github полный курс для начинающих. На практическом уроке для начинающих и новичков разберем как работать с Git и Github.
В ролике информация про то, как установить git и начать работать с github. Так же разберем основные команды: git clone, git init, git merge, git branch, git checkout, git push, git pull, git commit, git add, git config

[video](https://youtu.be/zZBiln_2FhM)

File **.gitignore** - список файлов и папок, которые не попадают в GIT

## Начало работы

- `git --version`
- `git --help`
- `git init` инициализация репозитория локально
- `git status` статус текущего репозитория
- `git add <name.file>` добавления файла для отслеживания git'ом
- `git commit -m "name commit"` зафиксировать изменения и дать им комментарии
- `git commit -am "описание изменений"` зафиксировать все изменения и дать им комментарии `add + commit -m`

## Branch ветки

- `git branch` текущая ветка
- `git branch name` создание новой ветки
- `git branch name -D` удаление ветки name
- `git checkout name` переключение на ветку name
- `git checkout -b name` создание новой ветки и переключение на неё

## Работа с GIT

- `git clone <http...>` клонирование репозитория с сервера, в нашем случае с github
- `git push` отправка изменений в репозиторий на сервер
- `git pull` забираем изменения из репозитория на сервере
- `git merge branch` слияние файлов и папок в текущую ветку из branch
- `git remote add origin git@github.com:burik84/git-course.git` привезка глобально репозитория к локальному
- `git push -u origin master` отправляем файлы из локального репо в глобальный

## Git workfolw that Works

- `git clone <http...>` клонирование репозитория с сервера, в нашем случае с github
- `git checkout -b name` создание новой ветки и переключение на неё
- `git push -u origin name` отправляем файлы из локального репо в глобальный
- `git push\pull` отправка\забираем изменений в\из глобального репозитория
- `git merge branch` слияние файлов и папок в текущую ветку из branch
