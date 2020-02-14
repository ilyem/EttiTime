
var mongoose = require('mongoose');

// Setup schema
var eventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    timelines: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Timeline'
    },
    startTime: {
        type: {
            hour: Number,
            minutes: Number
        },
        required: true

    },
    endTime: {
        type: {
            hour: Number,
            minutes: Number
        },
        required: true
    },
    modul: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Modul'
    },
    classroom: {
        type: String
    },
    occurance: {
        type: String,
        enum: ['weekly', 'even', 'odd'],
        required: true
    },
    day: {
        type: String,
        enum: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        required: true
    }
});

var Event = mongoose.model('event', eventSchema);

module.exports = Event
