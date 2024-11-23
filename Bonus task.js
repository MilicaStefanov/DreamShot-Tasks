function compareTotalNumberOfBubbles() {
    const numberOfBubblesInLinesArr = getNumberOfBubblesInLinesArr();
    const numberOfRenderedBubbles = getNumberOfRenderedBubbles();

    if (numberOfBubblesInLinesArr === numberOfRenderedBubbles) {
        console.log("Bubbles count is equal.");
        return true;
    }

    console.log("Bubbles count is not equal.");
    return false;
}

function getNumberOfBubblesInLinesArr() {
    const lines = window?.bubbleGame?.lines;
    let totalBubbles = 0;

    if (lines) {
        for (let i = 0; i < lines.length; i++) {
            const lineElement = lines[i];
            totalBubbles += lineElement.bubbleCount || 0;
        }
    }

    return totalBubbles;
}

function getNumberOfRenderedBubbles() {
    return window?.bubbleGame?.gridContainer?.children?.length || 0;
}

compareTotalNumberOfBubbles();
