function countBallsByColor(color) {
    let count = 0;
    window.bubbleGame.lines.forEach(line => {
        line.bubbles.forEach(bubble => {
            if (bubble && bubble.bubbleView && bubble.bubbleView._type === color) {
                count++;
            } else if (bubble) {
                console.log('Bubble structure:', bubble);
            }
        });
    });
    console.log(`Number of ${color} balls: ${count}`);
}
countBallsByColor('blue');