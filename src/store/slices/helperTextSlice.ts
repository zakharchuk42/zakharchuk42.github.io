import { createSlice } from '@reduxjs/toolkit'

export type helperTextType = {
  guide: {
    title: string
    text: string[]
  }[]
  hint: string[]
  quiz: {
    title: string
    subtitle: string
    answears: string[]
    correct: string
  }[]
}

const initialState: helperTextType = {
  guide: [
    {
      title: 'Get Your First Objective',
      text: [
        'Open your case file and read the first objective sticker, which can be found on the inside of the front cover of the case.',
      ],
    },
    {
      title: 'Read the Case File',
      text: [
        'Begin your investigation reading through ALL the newspaper clippings, police documents, photos, evidence, and other items in the case. As you learn about the crime scene, suspects, witnesses and other details of the investigation, look for information or evidence that helps you complete Objective #1.',
        'Just like a real cold case detective, nobody is going to tell you where the answer is.',
      ],
    },
    {
      title: 'Check Your Theory Online',
      text: [
        "After you think you've found the evidence you need for Objective #1, visit the online answer key to enter in the documents that prove your theory. CLICK HERE to find the answer key for Objective #1",
      ],
    },
    {
      title: 'Get Hints If You Need Them',
      text: [
        "Don't worry if your theory isn't correct because this ain’t easy.  If your answer is incorrect you can either return to the case files and dig for more clues or get hints through the online answer key. ",
        "The hint button won't appear on the answer key until AFTER you've entered a wrong answer.",
      ],
    },
    {
      title: 'Open Bonus Envelope A',
      text: [
        'The answer key will confirm when you have the right evidence and when you can open Bonus Envelope A, which will provide more evidence and your second objective.',
      ],
    },
    {
      title: 'Repeat for Objectives 2 & 3',
      text: [
        'Follow those same steps to complete Objectives 2 and 3 and open Bonus Envelopes B and C.',
      ],
    },
    {
      title: 'Bask in Your Glory Detective',
      text: [
        "After completing Objective 3, you'll have solved the case and put the killer behind bars. Don't forget to open Bonus Envelope #C for wrap up information and additional goodies about the case.",
      ],
    },
    {
      title: "Don't Stop There",
      text: [
        'If you had fun being a cold case detective, please share your experience on social media or write a review online so others can also have fun being a cold case detective for a few hours.',
      ],
    },
  ],
  hint: [
    'Lawyers are not always very helpful. That is the case here too.',
    "Cameron Daly doesn't have much to offer either.",
    "Only one person saw the killer. You'll want to listen to everything he had to say.",
  ],
  quiz: [
    {
      title: 'Which of These Items is Needed to Solve The Case?',
      subtitle: 'Which of These Items is Needed to Solve The Case?',
      answears: [
        'Newspaper Article',
        'Picture of Lumberski Alive',
        'Picture of Lumberski Dead',
        '911 Call Transcript',
        "Lawyer's Letter",
        'Suspect Corkboard',
      ],
      correct: '911 Call Transcript',
    },
    {
      title: 'The 911 Transcript? What About It?',
      subtitle: 'Which line has the necessary clue?',
      answears: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
      ],
      correct: '18',
    },
    {
      title: "Looks like you're on the right track detective...",
      subtitle: 'Which Other Item Is Needed to Make Your Case?',
      answears: [
        'Newspaper Article',
        'Picture of Lumberski Alive',
        'Picture of Lumberski Dead',
        "Lawyer's Letter",
        'Suspect Corkboard',
        'Picture of Stump',
      ],
      correct: 'Picture of Stump',
    },
    {
      title: 'Who Is the Killer?',
      subtitle: 'Who Whacked Luberski?',
      answears: ['Sam Williams', 'Jerry Andersen', 'Martin Park'],
      correct: 'Jerry Andersen',
    },
  ],
}

const helperTextSlice = createSlice({
  name: 'Helper Text',
  initialState,
  reducers: {},
})

export const helperTextReducer = helperTextSlice.reducer
