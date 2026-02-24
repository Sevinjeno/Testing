# Component Testing – LoginForm

Component tests validate UI behavior and user interaction.

Tool used:
- React Testing Library
- Jest

---

# 🔍 What Is Tested

##  Rendering

- Email input exists
- Password input exists
- Login button exists

## Conditional Rendering

- Loading state changes button text
- Error message displays correctly

## User Interaction

- Typing updates state
- Clicking submit triggers callback
- Correct arguments passed to onSubmit

---

#  Keywords

- Controlled components
- Props rendering
- Conditional UI
- User interaction simulation
- Accessibility queries (getByRole)
- Callback verification

---

#  Important Concepts

## Controlled Inputs

Inputs update component state via onChange.

## Accessibility-First Testing

Using:
- getByRole
- getByPlaceholderText

## Behavior Over Implementation

Tests focus on:
- What the user sees
- What the user can do

Not:
- Internal state structure

---

#  Why It Matters

Component testing ensures:

- UI reliability
- Proper user interaction
- Accurate state management
- Correct callback execution