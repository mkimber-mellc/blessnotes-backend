import { RequestHandler } from 'express';
import { JournalEntry } from '../types/journal.js';

export const getJournalEntries: RequestHandler = (req, res) => {
  const entries: JournalEntry[] = [
    { id: 1, title: "Gratitude", content: "Today I felt thankful for rest." },
    { id: 2, title: "Focus", content: "I was locked in for 2 hours straight." }
  ];

  res.json(entries);
};

export const createJournalEntry: RequestHandler = (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    res.status(400).json({ error: "Title and content are required." });
    return;
  }

  const newEntry: JournalEntry = {
    id: Date.now(),
    title,
    content
  };

  res.status(201).json({
    message: "Entry created successfully.",
    entry: newEntry
  });
};


