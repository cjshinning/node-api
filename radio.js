const util = require('util');
const EventEmitter = require('events');

function Radio(station) {
    const self = this;
    setTimeout(() => {
        self.emit('open', station);
    }, 0)
    setTimeout(() => {
        self.emit('close', station);
    }, 5000);

    this.on('newLister', listener => {
        console.log(`Event Listener: ${listener}`);
    })
}

util.inherits(Radio, EventEmitter);
module.exports = Radio;