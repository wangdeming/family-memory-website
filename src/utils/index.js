function formatNumber(n) {
    const str = n.toString()
    return str[1] ? str : `0${str}`
}

export function formatTime(date) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    const t1 = [year, month, day].map(formatNumber).join('/')
    const t2 = [hour, minute, second].map(formatNumber).join(':')

    return `${t1} ${t2}`
}
/**
 * @des:  格式转换，超过10000使用1w格式
 * @param:  {number}  init  需要转换的数字
 * @return:  {number}
 */
export function escapeThousands(int) {
    let num = (int || 0).toString()
    let result = ''
    if (num.length > 3) {
        result = (num / 10000).toFixed(1) + 'w'
    } else {
        result = num
    }
    return result
}

export default {
    formatNumber,
    formatTime,
    escapeThousands
}
