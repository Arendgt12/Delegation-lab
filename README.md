Lab: Event Delegation & DOM Traversal
This lab covers efficient event handling using delegation, closest(), and matches() to build scalable UI patterns.

Lab done by: [Jael Johnson]

Exercises
Ex 1: Accordion – One listener on .accordion to toggle panels and close others using closest().

Ex 2: Tag Builder – Dynamic tag creation and removal. Uses matches() to target delete buttons on elements added at runtime.

Ex 3: Filter Toolbar – Using dataset and matches() to filter cards by category and manage active button states.

Ex 4: Inline Edit – Double-click to swap text with an <input>. Handles state via Enter, Escape, and blur.

Core Concepts
Delegation: Attach one listener to a parent instead of many to children.

closest(sel): Finds the nearest ancestor (or self) matching the selector.

matches(sel): Checks if an element satisfies a CSS selector.

Dynamic UI: Handling elements that are added/removed after the page loads.