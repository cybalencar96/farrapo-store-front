function getDate (date) {
    return (new Date(date).toLocaleString()).split(' ')[0]
}

function getHour (date) {
    return (new Date(date).toLocaleString()).split(' ')[1]
}

function scrollToNextItem(listRefs, dir, idx) {
    const next = dir === 'down' ? idx+1 : idx-1;

    window.scrollTo({
        top: listRefs.current[next].current.offsetTop - 100,
        behavior: 'smooth'
    })
}

export {
    getDate,
    getHour,
    scrollToNextItem
}