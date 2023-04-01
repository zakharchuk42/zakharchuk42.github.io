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
      title: 'Read the Case File',
      text: [
        'Begin your investigation reading through ALL the newspaper clippings, police documents, photos, evidence, and other items in the case. As you learn about the crime scene, suspects, witnesses and other details of the investigation, look for information or evidence that helps you solve a case.',
        'Just like a real cold case detective, nobody is going to tell you where the answer is.',
      ],
    },
    {
      title: 'Check Your Theory in "I Know Who Killed!"',
      text: [
        'After you think you\'ve found the evidence you need visit the "I Know Who Killed!" and pass the test.',
      ],
    },
    {
      title: 'Get Hints If You Need Them',
      text: [
        'Don\'t worry if your theory isn\'t correct because this ain’t easy. If your answer is incorrect you can either return to the case files and dig for more clues or get hints through "I Want Hint".',
      ],
    },
    {
      title: 'Bask in Your Glory Detective',
      text: [
        'After completing test "I Know Who Killed!", you\'ll have solved the case and put the killer behind bars.',
      ],
    },
    {
      title: "Don't Stop There",
      text: [
        'If you had fun being a cold case detective, please share your experience on social media so others can also have fun being a detective for a few moments.',
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
