//how to fetch advice slip api?

fetch('https://api.adviceslip.com/advice')
;

const response = await fetch('https://api.adviceslip.com/advice?t=' + Math.random());