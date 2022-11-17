const isElementInViewport = el => {
    const rect = el.getBoundingClientRect();
    return (rect.top + rect.height >= 0 && rect.bottom - rect.height <= window.innerHeight);
}