function countTotalBubbles() {
    const bubbleGame = window.bubbleGame;
    if (!bubbleGame || !bubbleGame.lines) {
        console.error("Bubbles not found!");
        return;
    }
    const lines = bubbleGame.lines;
    let totalBubbles = 0;
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const bubbles = line.bubbles;
        const bubbleCount = bubbles.filter(bubble => bubble).length;
        totalBubbles += bubbleCount;
    }
    console.log(`Total number of bubbles on the screen: ${totalBubbles}`);
}
countTotalBubbles();