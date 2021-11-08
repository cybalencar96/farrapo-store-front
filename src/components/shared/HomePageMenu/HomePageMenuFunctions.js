function scrollHorizontally(event, reference, side, amount) {
    event.preventDefault();
    if (side === "left") {
        reference.current.scrollLeft -= amount;
    } else {
        reference.current.scrollLeft += amount;
    }
}

export {
    scrollHorizontally,
}