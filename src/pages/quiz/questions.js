export const questions = [
    {
        title: 'React - это ... ?',
        variants: ['библиотека', 'фреймворк', 'приложение'],
        correct: 0,
    },
    {
        title: 'Компонент - это ... ',
        variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
        correct: 1,
    },
    {
        title: 'Что такое JSX?',
        variants: [
            'Это простой HTML',
            'Это функция',
            'Это тот же HTML, но с возможностью выполнять JS-код',
        ],
        correct: 2,
    },
    {
        title: 'Какая команда используется для запуска локального сервера разработки React?',
        variants: [
            'npm build',
            'npm start',
            'npm run dev',
        ],
        correct: 1,
    },

    {
        title: 'Какой порт локального хоста по умолчанию используется сервером разработки React?',
        variants: [
            '3000',
            '5000',
            '8080',
        ],
        correct: 0,
    },

    {
        title: 'Для разработки и запуска кода React требуется Node.js',
        variants: [
            'Да',
            'Нет',
        ],
        correct: 0,
    },

    {
        title: 'Как называется копия «настоящего» DOM, которая хранится в памяти?',
        variants: [
            'React DOM',
            'Shadow DOM',
            'Virtual DOM'
        ],
        correct: 2,
    },
];