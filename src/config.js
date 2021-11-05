const config = {
    lng: 'ru',
    translation: {
        ru: {
            startBtn: 'Начать',
            resetBtn: 'Сброс',
            relaxBtn: 'Отдыхать',
            jobBtn: 'Работать',
            statusRelax: 'Отдых',
            statusJob: 'Работа',
            approach: 'Подход'
        },
        en: {
            startBtn: 'Start',
            resetBtn: 'Reset',
            relaxBtn: 'Relax',
            jobBtn: 'Job',
            statusRelax: 'Relax',
            statusJob: 'Job',
            approach: 'Aproach'
        }
    },
    screen: 'ScreenStart',
    readyNum: 0,
    statusFlag: true,
    approachVal: 0,
    min:'00',
    sec: '00',
    splitSec: '00',
    timer: null
}

export {config}