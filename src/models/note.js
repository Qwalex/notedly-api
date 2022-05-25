// Запросим библиотеку mongoose
const mongoose = require('mongoose');

// Определяем схему БД заметки
const NoteSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },

    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },

    favoriteCount: {
        type: Number,
        default: 0,
    },

    favoritedBy: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
}, {
    timestamps: true,
});

// Определяем модель 'Note' со схемой
const Note = mongoose.model('Note', NoteSchema);

// Экспортируем модуль
module.exports = Note;