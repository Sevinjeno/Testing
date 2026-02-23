Your .test.tsx file
      ↓
  ts-jest         ← compiles TypeScript → JavaScript
      ↓
    jest          ← runs the tests
      ↓
  jsdom           ← provides fake browser (window, document)
      ↓
@testing-library/react   ← renders your component into jsdom
@testing-library/user-event  ← simulates clicks/typing
@testing-library/jest-dom    ← gives you readable assertions