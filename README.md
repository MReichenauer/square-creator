# square-creator
<p>My attempt to solve <a href="https://github.com/Wizardworks-AB/programmeringsuppgift/blob/master/Wizardworks%20-%20programmeringsuppgift.pdf">Wizardworks programming task</a></p>

## Task overview
<p>Create a webpage that generates potentially endless squares in a square pattern.</p>

### Flow
<p>When the user press “Add square” button a new square will be added, the color of a newly added square should be random, but never the same color as the previous square. When a new square is added it should follow the pattern bellow and eventually the combined squares should create a square.</p>

![Skärmbild 2025-05-22 094154](https://github.com/user-attachments/assets/5412125b-8e5d-4513-b10f-9cba7c75de8a)

## Requirements

### Technologies
- Front-end: React
- Back-end: .NET/C#

### Logic
<p>Each time “Add square” button is interacted with, the result (position and color) should be saved via the .NET API to a disk in Json-format.
When the web-application is closed and opened once more, the squares from the disk should be rendered – this disk should be used as a single source of truth.
</p>
