A simple expo app used in conjunction with the bmlt-proxy I built. This is a project used to learn expo and react-native.


# React Native / Expo Learning Loop (Week 1)

A 7-day plan to build intuition for React Native and React basics.  
Each day is a small experiment done in `App.tsx`.

---

## Day 1: Components & Props
- Create a `Greeting` component that takes a `name` prop.  
- Render it twice with different names.  
**Takeaway:** Components = functions, props = arguments.

---

## Day 2: State & Interaction
- Add a button that toggles between “Hello” and “Goodbye.”  
- Use `useState` for the text.  
**Takeaway:** State changes → React re-renders → UI updates.

---

## Day 3: Lists
- Make an array of strings (`["Monday", "Tuesday", ...]`).  
- Render them with `FlatList`.  
**Takeaway:** React maps data → UI; keys are important for lists.

---

## Day 4: Styling
- Wrap items in `View`.  
- Use `StyleSheet` to add padding, colors, flexbox layout.  
**Takeaway:** Styles are objects applied to components.

---

## Day 5: Multiple Screens
- Install `react-navigation`.  
- Create two screens: Home and Details.  
- Add a button on Home → navigate to Details.  
**Takeaway:** Apps = trees of screens/components.

---

## Day 6: Fetching Data
- Fetch meetings from your proxy.  
- Show “loading…” until data arrives.  
- Render the meeting names in a list.  
**Takeaway:** Async + state = dynamic data.

---

## Day 7: Reflection & Cleanup
- Review what you built this week.  
- Refactor: move components into separate files (`MeetingList.tsx`, etc.).  
- Commit & push to GitHub.  
**Takeaway:** Real apps = composed pieces, not giant files.
